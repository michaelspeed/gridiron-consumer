import React, {useEffect, useState} from "react"
import withApollo from "../../utils/withApollo";
import Layout from "../../components/Layout";
import {
    Collection,
    FacetValue,
    GetDefaultStoreDocument, GetFacetDocumentDocument,
    GetMenuDocument,
    Product,
    QueryFacetDocument,
    Store
} from "../../gql";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {assetsURL} from "../../utils/globalconstants";
import {primary} from "../../utils/colorConfig";
import {getProdRoute, getVariantRoute} from "../../utils/routingUtils";
import {useRouter} from "next/router";

interface Props {
    id: string,
    menu: any,
    store: Store,
    products: Product[],
    facet: FacetValue
}

const FacetSingle = ({menu, store, products, facet}: Props) => {

    const [collection, setCollection] = useState<Collection[]>([])

    const navig = useRouter()

    useEffect(() => {
        let allcoll: Collection[] = []
        for (const ites of products) {
            const colfilt = allcoll.filter(item => item.id === ites.collection!.id)
            if (colfilt.length > 0) {
                const index = allcoll.findIndex(item => item.id === ites.collection!.id)
                allcoll[index].products!.push(ites)
            } else {
                allcoll.push({
                    products: [ites],
                    ...ites.collection!
                })
            }
        }
        setCollection(allcoll)
    }, [products])


    return (
        <React.Fragment>
            <Layout title={store.storeName} menu={menu.data.GetMenu.menu} store={store}>
                <div style={{marginBottom: 155}}/>
                <div className="breadcrumb-area breadcrumb-mt bg-gray breadcrumb-ptb-1">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2 style={{color: primary}}>{facet.code}</h2>
                        <p className="left">{facet.facet.name}</p>
                    </div>
                </div>
                <div className="breadcrumb-img-2">
                    <img src="/images/about/breadcrumb-3.png" alt=""/>
                </div>
            </div>
                <div className="shop-area breadcrumb-mt section-padding-12 pt-25 pb-160">
                    <div className="container-fluid">
                        {collection.length === 0 && <div className='d-flex justify-content-center align-items-center'>
                            <span>No Products Found!</span>
                        </div>}
                        {collection.map(colitem => (
                            <React.Fragment>
                                <div className="row flex-row-reverse">
                                    <div className="col-xl-10 col-lg-9">
                                        <div className="shop-wrap-5">
                                            <div className="shop-top-bar">
                                                <div className="shop-top-bar-right">
                                                    <div className="shop-page-list">
                                                        <ul>
                                                            <li><h5 style={{fontWeight: 700, fontFamily: 'Kumbh Sans'}}>{colitem.name}</h5></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Carousel
                                        plugins={[
                                            'infinite',
                                            'arrows',
                                            {
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    numberOfSlides: 6
                                                }
                                            },
                                        ]}
                                    >
                                        {colitem.products.map(prod => (
                                            <div className="product-wrap mb-35" style={{width: 290}}>
                                                <div className="product-img product-img-zoom mb-25">
                                                    <a href="product-details.html">
                                                        <img src={`${assetsURL}/${prod.featuredAsset.preview}`} alt="" style={{objectFit: "contain", height: 180}}/>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4><a href="javascript:;">{prod.productName}</a></h4>
                                                    </div>
                                                    {/*<div className="product-price">
                                                        <span>$ 100</span>
                                                        <span className="old-price">$ 110</span>
                                                    </div>*/}
                                                </div>
                                                <div className="product-action-position-1 text-center">
                                                    <div className="product-content">
                                                        <h4><a href="javascript:;">{prod.productName}</a></h4>
                                                        {/*<div className="product-price">
                                                            <span>$ 100</span>
                                                            <span className="old-price">$ 110</span>
                                                        </div>*/}
                                                    </div>
                                                    <div className="product-action-wrap">
                                                        <div className="product-action-cart">
                                                            <button title="Add to Cart" style={{backgroundColor: primary}} onClick={() => navig.push(getVariantRoute(prod.id))}>View</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

FacetSingle.getInitialProps = async (ctx) => {

    const client = ctx.apolloClient;
    const id = ctx.query.id
    const menu = await client.query({
        query: GetMenuDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })

    const allProds = await client.query({
        query: QueryFacetDocument,
        variables: {
            id
        }
    })

    const facet = await client.query({
        query: GetFacetDocumentDocument,
        variables: {
            id
        }
    })

    return {
        id,
        menu,
        store: defaultStore.data.GetDefaultStore,
        products: allProds.data.queryFacet,
        facet: facet.data.GetFacetDocument
    }
}

export default withApollo(FacetSingle)
