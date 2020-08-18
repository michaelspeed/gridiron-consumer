import {useQuery} from "@apollo/client";
import {GetProductAssetDocument, GetProductAssetQueryVariables} from "../../gql";
import {assetsURL} from "../../utils/globalconstants";
import {useRouter} from "next/router";
import {useStore} from "../../store/store";
import {primary} from "../../utils/colorConfig";
import {getProdRoute, getVariantRoute} from "../../utils/routingUtils";

const HomePageListItem = ({item}) => {

    const {data, loading, error} = useQuery<any, GetProductAssetQueryVariables>(GetProductAssetDocument, {
        variables: {
            variantId: item.type.key === 'variant' ? item.target.target.id : undefined,
            prodId: item.type.key === 'product' ? item.target.target.id : undefined
        }
    })

    const navig = useRouter()
    const {setQuickView, setQuickViewType} = useStore(null)

    console.log(item)

    return (
        <div className="product-wrap-plr-1">
            <div className="product-wrap">
                <div className="product-img product-img-zoom mb-25" style={{height: 200}}>
                    <a href="javascript:;" onClick={() => {
                        if (item.type.key === 'product') {
                            navig.push(getVariantRoute(item.target.target.id))
                        } else if (item.type.key === 'variant') {
                            navig.push(getProdRoute(item.target.target.id))
                        }
                    }}>
                        {data !== undefined && <img src={`${assetsURL}/${data.getProductAsset.preview}`}  alt="" style={{height: 180, objectFit: "contain"}}/>}
                        {data === undefined && <img src="/images/product/product-151.jpg" alt=""/>}
                    </a>
                </div>
                <div className="product-content" style={{display: "flex", justifyContent: "center"}}>
                    {item.type.key === 'product' && <h4><a href="javascript:;" onClick={() => navig.push(getVariantRoute(item.target.target.id))}>{item.target.target.productName}</a></h4>}
                    {item.type.key === 'variant' && <h4><a href="javascript:;" onClick={() => navig.push(getProdRoute(item.target.target.id))}>{item.target.target.name}</a></h4>}
                </div>
                <div className="product-action-position-1 text-center">
                    <div className="product-content">
                        {item.type.key === 'product' && <h4><a href="javascript:;" onClick={() => navig.push(getVariantRoute(item.target.target.id))}>{item.target.target.productName}</a></h4>}
                        {item.type.key === 'variant' && <h4><a href="javascript:;" onClick={() => navig.push(getProdRoute(item.target.target.id))}>{item.target.target.name}</a></h4>}
                    </div>
                    <div className="product-action-wrap">
                        <div className="product-action-cart">
                            {item.type.key === 'product' && <button title="Show All" style={{backgroundColor: primary}} onClick={() => {
                                setQuickViewType(item.target.target.id, 'product')
                                setQuickView()
                            }}>Show all</button>}
                            {item.type.key === 'variant' && <button title="Quick View" style={{backgroundColor: primary}} onClick={() => {
                                setQuickViewType(item.target.target.id, 'variant')
                                setQuickView()
                            }}>Quick View</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageListItem
