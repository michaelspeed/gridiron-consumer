import Layout from "../../components/Layout";
import withApollo from "../../utils/withApollo";
import {
    Collection,
    FacetValue,
    GetDefaultStoreDocument,
    GetMenuDocument, GetProductVariantByProductDocument,
    GetSingleCollectionDocument, Product, ProductVariant, SingProductInfoDocument,
    Store
} from "../../gql";
import {initializeStore, useStore} from "../../store/store";
import {getSnapshot} from "mobx-state-tree";
import {getProdRoute} from "../../utils/routingUtils";
import {assetsURL} from "../../utils/globalconstants";
import {primary} from "../../utils/colorConfig";
import {useRouter} from "next/router";
import {observer} from "mobx-react";

interface Props {
    id: string,
    menu: any,
    store: Store,
    variant: ProductVariant[],
    prod: Product
}

const VariantSingle = ({menu, store, variant, prod}: Props) => {

    const {setQuickView, setQuickViewType} = useStore()

    const navig = useRouter()

    return (
        <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu} store={store}>
            <div className="breadcrumb-area breadcrumb-mt bg-gray breadcrumb-ptb-1" style={{marginTop: 130}}>
                <div className="container">
                    <div className="breadcrumb-content text-center">
                        <h2>{prod.productName}</h2>
                    </div>
                </div>
            </div>
            <div className="shop-area pt-160 pb-160">
                <div className="container">
                    <div id="shop-1" className="tab-pane active">
                        <div className="row">
                            {variant.map(variant => (
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
                                                    <button title="Quick View" style={{backgroundColor: primary}}
                                                            onClick={() => {
                                                                setQuickViewType(variant.id, 'variant')
                                                                setQuickView()
                                                            }}
                                                    >Quick view</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

VariantSingle.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const id = ctx.query.id
    const menu = await client.query({
        query: GetMenuDocument
    })
    const defaultStore = await client.query({
        query: GetDefaultStoreDocument
    })

    const allVariant  = await client.query({
        query: GetProductVariantByProductDocument,
        variables:{
            id
        }
    })

    const prodinfo = await client.query({
        query: SingProductInfoDocument,
        variables: {
            id
        }
    })

    const store = initializeStore()

    return {
        id,
        menu,
        store: defaultStore.data.GetDefaultStore,
        initialStore: getSnapshot(store),
        variant: allVariant.data.getProductVariantByProduct,
        prod: prodinfo.data.singProductInfo
    }
}

export default withApollo(observer(VariantSingle))
