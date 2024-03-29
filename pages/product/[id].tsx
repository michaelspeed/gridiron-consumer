import Layout from "../../components/Layout";
import {
    Asset, CreateViewDocument,
    GetDefaultStoreDocument,
    GetHomePageDocument,
    GetMenuDocument,
    GetSingleProductVariantDocument,
    ProductVariant, ProductVariantPrice, ShiftProductVariantDocument, SingProductPriceDocument, Store
} from "../../gql";
import withApollo from "../../utils/withApollo";
import useScripts from "../../utils/useScript";
import React, {useEffect, useState} from "react";
import {assetsURL} from "../../utils/globalconstants";
import clsx from "clsx";
import {initializeStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import {primary} from "../../utils/colorConfig";
import {Button, Card, CardActionArea, CardContent, Drawer, IconButton, TextField, Typography} from "@material-ui/core";
import ProdPrice from "../../components/Product/ProdPrice";
import {useMutation, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import {Rate} from "antd";
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";
import {DateTime} from "luxon";

// 0237670224

interface Props {
    menu: any,
    variant: ProductVariant,
    store: Store
    price: ProductVariantPrice[],
    id: string
}

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const SingleProduct = ({menu, variant, store, price, id}: Props) => {

    const [allAssets, setAllAllAssets] = useState<Asset[]>([])
    const [booking, setBooking] = useState(false)
    const [check, setCheck] = useState(false)
    const [pincode, setPincode] = useState('')

    const [CreateView] = useMutation(CreateViewDocument)

    const [view, setView] = useState(false)

    useEffect(() => {
        if(!view) {
            CreateView({variables:{id: id, variant: 'VARIANT'}})
            setView(true)
        }
    })

    const navig = useRouter()

    const [SplitName] = useMutation(ShiftProductVariantDocument)

    useEffect(() => {
        let newallasset: any = []
        if(variant.asset) {
            newallasset.push(variant.asset.asset)
        }
        if(variant.product.assets) {
            for (const ass of variant.product.assets) {
                newallasset.push(ass.asset)
            }
        }
        setAllAllAssets(newallasset)
    },[variant])

    useScripts('/js/main.js')

    const optColor = (name) => {
        const namesplit = name.split(" ")
        const varsplit = variant.name.replace(/[^a-zA-Z0-9 ]/gi, '').split(" ")
        if (!namesplit.every(elm => varsplit.includes(elm))) {
            return {
                back: '#FFFFFF',
                color: '#000000'
            }
        } else {
            return {
                back: primary,
                color: '#FFFFFF'
            }
        }
    }

    const lowPrice = () => {
        let mainPrice = 0
        for (const pr of price) {
            if (mainPrice === 0) {
                mainPrice = pr.price
            } else if (mainPrice > pr.price) {
                mainPrice = pr.price
            }
        }
        return mainPrice
    }

    return (
        <Layout title={store.storeName} menu={menu.data.GetMenu.menu} store={store}>
            <div className="product-details-area product-details-bg slider-mt-7" style={{marginTop: 120}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-tab-wrap">
                                <div className="product-details-tab-large tab-content pt-40 text-center">
                                    {allAssets.map((asset, index) => (
                                        <div className={clsx({'tab-pane': true, 'active': index === 0})} id={asset.id}>
                                            <div className="product-details-2-img ">
                                                <img src={`${assetsURL}/${asset.source}`} alt=""/>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="product-details-shape pro-dec-shape1">
                                        <img src="/images/product-details/product-details-shape.png" alt=""/>
                                    </div>
                                </div>
                                <div className="product-details-tab-small nav">
                                    {allAssets.map((asset, index) => (
                                        <a className={clsx({'active': index === 0})} href={`#${asset.id}`}>
                                            <img src={`${assetsURL}/${asset.preview}`} alt="" style={{height: 100, objectFit: "contain"}}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-content main-product-details-content">
                                <h2>{variant.name}</h2>
                                <div className="product-ratting-review-wrap">
                                    <div className="product-ratting-digit-wrap align-items-center">
                                        <div className="product-ratting">
                                            <Rate value={variant.rating} character={({ index }) => {
                                                return customIcons[index + 1];
                                            }}/>
                                        </div>
                                        <div className="product-digit">
                                            <span>{variant.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-details-price">
                                    {lowPrice() !== 0 && <span>₹ {lowPrice()}</span>}
                                    {lowPrice() === 0 && <div className="cart-checkout-btn">
                                        <a className="btn-hover cart-btn-style" href="javascript:;">Unavailable</a>
                                        </div>}
                                    {/*<span className="old-price">US $95.72</span>*/}
                                </div>
                                {variant.product.options.map((item) => (
                                    <div className="pro-details-size" key={item.id}>
                                        <span>{item.name}:</span>
                                        <div className="pro-details-size-content">
                                            <ul>
                                                {item.options.map(opt => (
                                                    <li style={{backgroundColor: optColor(opt.code).back}} key={opt.id}>
                                                        <a href="javascript:;"
                                                           onClick={() => {
                                                               SplitName({
                                                                   variables: {
                                                                       prodId: variant.product.id,
                                                                       name: opt.code
                                                                   }
                                                               })
                                                                   .then(value => {
                                                                       navig.push(`/product/${value.data.ShiftProductVariant.id}`)
                                                                   })
                                                           }}
                                                           style={{width: "inherit", paddingLeft: 5, paddingRight: 5, color: optColor(opt.code).color}}>{opt.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                <div className="product-details-meta">
                                    <ul>
                                        {variant.product.facets.map(item => (
                                            <li>
                                                <span>{item.facet.name}:</span>
                                                <a href="#" style={{marginLeft: 10}}>{item.code}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {lowPrice() !== 0 && <div style={{display: "flex", flexDirection: "column", marginBottom: 10}}>
                                    <span className='text-muted'>Please enter pin code</span>
                                    <div style={{width: '100%'}}>
                                        {check ? <span>{pincode}</span> : <TextField  label="Pin Code" value={pincode} onChange={event => setPincode(event.target.value)} />}
                                        {check ? <Button color={"primary"} onClick={() => setCheck(false)}>
                                            CHANGE
                                        </Button> : <Button color={"primary"} onClick={() => setCheck(true)}>
                                            CHECK
                                        </Button>}
                                    </div>
                                </div>}
                                <div className="pro-details-action-wrap">
                                    {check && <div className="pro-details-buy-now">
                                        <a href="javascript:;" style={{backgroundColor: primary, textDecoration: "none"}} onClick={() => setBooking(true)}>Buy Now</a>
                                    </div>}
                                    <div className="pro-details-action">
                                        <a className="social" title="Social" href="javascript:;">
                                            <i className="fas fa-share"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-review-wrapper pt-160 pb-155">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dec-review-topbar nav mb-65">
                                <a className="active" data-toggle="tab" href="#des-details1">Description</a>
                                <a data-toggle="tab" href="#des-details2">Specification</a>
                                <a data-toggle="tab" href="#des-details3">Reviews and Ratting </a>
                            </div>
                            <div className="tab-content dec-review-bottom">
                                <div id="des-details1" className="tab-pane active">
                                    <div className="description-wrap" dangerouslySetInnerHTML={{__html: variant.product.description}}></div>
                                </div>
                                <div id="des-details2" className="tab-pane">
                                    {variant.specs && variant.specs.specs.map(spec => (
                                        <div className="specification-wrap table-responsive">
                                            <div>
                                                <h4>{spec.header}</h4>
                                            </div>
                                            <table>
                                                <tbody>
                                                {spec.child.map(spechild => (
                                                    <tr>
                                                        <td className="width1">{spechild.key}</td>
                                                        <td>{spechild.value}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                                <div id="des-details3" className="tab-pane">
                                    <div className="review-wrapper">
                                        <h2>Reviews for {variant.name}</h2>
                                        {variant.reviews.length === 0 && <div className='d-flex justify-content-center align-items-center'>
                                            <span>No Reviews</span>
                                        </div>}
                                        {variant.reviews.map(rev => (
                                            <div className="single-review">
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-name">
                                                            <h5>{DateTime.fromISO(rev.createdAt).toFormat('DD')}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="review-rating">
                                                        <Rate value={rev.stars} character={({ index }) => {
                                                            return customIcons[index + 1];
                                                        }}/>
                                                    </div>
                                                    <p>{rev.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer open={booking} onClose={() => setBooking(false)} anchor={"bottom"}>
                <div className='row'>
                    {price.map(item => (
                        <div key={item.id} className='col-md-2'>
                            <ProdPrice item={item} variant={variant} zip={pincode} onClose={() => setBooking(false)}/>
                        </div>
                    ))}
                </div>
            </Drawer>
        </Layout>
    )
}

SingleProduct.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const id = ctx.query.id
    const menu = await client.query({
        query: GetMenuDocument
    })
    const variant = await client.query({
        query: GetSingleProductVariantDocument,
        variables: {
            id
        }
    })

    const variantPrice = await client.query({
        query: SingProductPriceDocument,
        variables: {
            id
        }
    })

    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })

    const store = initializeStore()

    return {
        menu,
        variant: variant.data.getSingleProductVariant,
        store: defaultStore.data.GetDefaultStore,
        initialStore: getSnapshot(store),
        price: variantPrice.data.singProductPrice.price,
        id
    }
}

export default withApollo(SingleProduct)
