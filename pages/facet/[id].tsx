import React, {useEffect, useState} from "react"
import withApollo from "../../utils/withApollo";
import Layout from "../../components/Layout";
import {
    Collection,
    FacetValue,
    GetDefaultStoreDocument,
    GetMenuDocument,
    Product,
    QueryFacetDocument,
    Store
} from "../../gql";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {assetsURL} from "../../utils/globalconstants";

interface Props {
    id: string,
    menu: any,
    store: Store,
    products: Product[]
}

const FacetSingle = ({menu, store, products}: Props) => {

    const [collection, setCollection] = useState<Collection[]>([])

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

    console.log(collection)

    return (
        <React.Fragment>
            <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu} store={store}>
                <div className="shop-area breadcrumb-mt section-padding-12 pt-25 pb-160">
                    <div className="container-fluid">
                        {collection.map(colitem => (
                            <React.Fragment>
                                <div className="row flex-row-reverse">
                                    <div className="col-xl-10 col-lg-9">
                                        <div className="shop-wrap-5">
                                            <div className="shop-top-bar">
                                                <div className="shop-top-bar-right">
                                                    <div className="shop-page-list">
                                                        <ul>
                                                            <li><h5>{colitem.name}</h5></li>
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
                                            <div className="product-wrap mb-35" style={{height: 200}}>
                                                <div className="product-img product-img-zoom mb-25">
                                                    <a href="product-details.html">
                                                        <img src={`${assetsURL}/${prod.featuredAsset.preview}`} alt="" style={{objectFit: "contain", height: 180}}/>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <h4><a href="product-details.html">{prod.productName}</a></h4>
                                                    <div className="product-price">
                                                        <span>$ 100</span>
                                                        <span className="old-price">$ 110</span>
                                                    </div>
                                                </div>
                                                <div className="product-action-position-1 text-center">
                                                    <div className="product-content">
                                                        <h4><a href="product-details.html">{prod.productName}</a></h4>
                                                        {/*<div className="product-price">
                                                            <span>$ 100</span>
                                                            <span className="old-price">$ 110</span>
                                                        </div>*/}
                                                    </div>
                                                    <div className="product-action-wrap">
                                                        <div className="product-action-cart">
                                                            <button title="Add to Cart">Quick View</button>
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

    return {
        id,
        menu,
        store: defaultStore.data.GetDefaultStore,
        products: allProds.data.queryFacet
    }
}

export default withApollo(FacetSingle)
