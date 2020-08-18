import Layout from "../../components/Layout";
import {
    Collection, FacetValue,
    GetDefaultStoreDocument, GetFacetsByCollectionDocument,
    GetMenuDocument, GetProductVariantForCollectionDocument, GetSingleCollectionDocument,
    GetSingleProductVariantDocument,
    ProductVariant,
    Store
} from "../../gql";
import withApollo from "../../utils/withApollo";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Checkbox, Spin} from 'antd';
import {assetsURL} from "../../utils/globalconstants";
import { LoadingOutlined } from '@ant-design/icons';
import {primary} from "../../utils/colorConfig";
import {initializeStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import {useRouter} from "next/router";
import {getProdRoute} from "../../utils/routingUtils";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface Props {
    id: string,
    menu: any,
    store: Store,
    collection: Collection,
    facetValues: FacetValue[]
}

const CollectionSingle = ({menu, store, collection, id}: Props) => {

    const [allFacet, setFacet] = useState<any[]>([])
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<ProductVariant[]>([])
    const [search, setSearch] = useState('')

    const navig = useRouter()

    const {...facetCol} = useQuery(GetFacetsByCollectionDocument, {
        variables: {
            id
        }
    })

    const {data, loading, error} = useQuery(GetProductVariantForCollectionDocument, {
        variables: {
            id,
            limit: (page * 9),
            search: search === '' ? undefined : search
        }
    })

    useEffect(() => {
        if (!loading && !error) {
            setProducts(data.GetProductVariantForCollection)
        }
    }, [data])

    useEffect(() => {
        if (!facetCol.loading && !facetCol.error) {
            let face: any[] = []
            for (const fac of facetCol.data.GetFacetsByCollection) {
                const filtfac = face.filter(item => item.id === fac.facet.id)
                if (filtfac.length > 0) {
                    face[face.findIndex(item => item.id === fac.facet.id)].child.push({id: fac.id, name: fac.code})
                } else {
                    face.push({id: fac.facet.id, name: fac.facet.name, code: fac.facet.code, child: [{id: fac.id, name: fac.code}]})
                }
            }
            setFacet(face)
        }
    }, [facetCol.data])

    return (
        <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu} store={store}>
            <div style={{marginBottom: 155}}/>
            <div className="breadcrumb-area breadcrumb-mt bg-gray breadcrumb-ptb-1">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2 style={{color: primary}}>{collection.name}</h2>
                        <p className="left">{collection.description}</p>
                    </div>
                </div>
                <div className="breadcrumb-img-2">
                    <img src="/images/about/breadcrumb-3.png" alt=""/>
                </div>
            </div>
            <div className="categorie-area">
                <div className="container-fluid p-0">
                    <div className='d-flex justify-content-center align-items-center'>
                        {collection.children.map(subCol => (
                            <div className="single-categories-5 text-center" style={{width: '100%'}}>
                                <div className="single-categories-5-img">
                                    <a href="shop.html"><img className="inject-me"
                                                             src="assets/images/icon-img/furniture-dress.svg"
                                                             alt=""/></a>
                                </div>
                                <div className="categorie-content-6">
                                    <h5><a style={{color: '#212529', fontFamily:'Poppins'}} href="shop.html">{subCol.name}</a></h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shop-area pt-160 pb-160">
                <div className="container">
                    <div className='d-flex justify-content-center align-items-center' style={{marginTop: -70, marginBottom: 30}}>
                        <div className="search-style-6">
                            <form>
                                <div className="form-search-6">
                                    <input className="input-text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Type to search" type="search" style={{width: 500}}/>
                                    <button>
                                        <i className="icofont-search-1"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="tab-content">
                                <div className="tab-content pt-30">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            {products.map(variant => (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="product-wrap mb-50" style={{height: 300}}>
                                                        <div className="product-img product-img-zoom mb-25">
                                                            <a href="javascript:;" onClick={() => navig.push(getProdRoute(variant.id))}>
                                                                <img src={`${assetsURL}/${variant.asset.asset.preview}`}  alt="" style={{height: 150, objectFit: "contain"}}/>
                                                            </a>
                                                        </div>
                                                        <div className="product-content">
                                                            <h4><a href="javascript:;" onClick={() => navig.push(getProdRoute(variant.id))}>{variant.name}</a></h4>
                                                            <div className="product-price">
                                                                <span>$ 124</span>
                                                                <span className="old-price">$ 130</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-action-position-1 text-center">
                                                            <div className="product-content">
                                                                <h4><a href="javascript:;" onClick={() => navig.push(getProdRoute(variant.id))}>{variant.name}</a></h4>
                                                                <div className="product-price">
                                                                    <span>$ 124</span>
                                                                    <span className="old-price">$ 130</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-action-wrap">
                                                                <div className="product-action-cart">
                                                                    <button title="Quick View" style={{backgroundColor: primary}}>Quick view</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pro-pagination-style text-center mt-50">
                                        {loading && <Spin indicator={antIcon} />}
                                        {!loading && !error && <button
                                            style={{backgroundColor: primary, padding: '7px 32px 7px', color: '#FFFFFF', border: "none", fontWeight: 500, fontSize: 12}}
                                            onClick={() => setPage(page + 1)}
                                        >Load More</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="shop-sidebar-style">
                                {collection.children.length > 0 && <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Subcategories</h4>
                                    <div className="sidebar-widget-categori mt-45 mb-70">
                                        <ul>
                                            {collection.children.map(sub => (
                                                <li><a href="#">{sub.name}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>}
                                {allFacet.map(face => (
                                    <div className="sidebar-widget">
                                        <h4 className="pro-sidebar-title">{face.name}</h4>
                                        <div className="pro-details-color-content sidebar-widget-color mt-45 mb-70">
                                            {face.child.slice(0, 10).map(subface => (
                                                <div>
                                                    <Checkbox>{subface.name}</Checkbox>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Filter By Price Range</h4>
                                    <div className="price-filter mt-55 mb-65">
                                        <div id="slider-range"></div>
                                        <div className="price-slider-amount">
                                            <div className="label-input">
                                                <span>Price: </span><input type="text" id="amount" name="price"
                                                                           placeholder="Add Your Price"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

CollectionSingle.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const id = ctx.query.id
    const menu = await client.query({
        query: GetMenuDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })
    const coll = await client.query({
        query: GetSingleCollectionDocument,
        variables:{
            id
        }
    })

    const store = initializeStore()

    return {
        id,
        menu,
        store: defaultStore.data.GetDefaultStore,
        collection: coll.data.GetSingleCollection.collection,
        facetValues: coll.data.GetSingleCollection.facetValues,
        initialStore: getSnapshot(store)
    }
}

export default withApollo(CollectionSingle)
