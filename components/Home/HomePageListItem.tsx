import {useQuery} from "@apollo/client";
import {GetProductAssetDocument, GetProductAssetQueryVariables} from "../../gql";
import {assetsURL} from "../../utils/globalconstants";

const HomePageListItem = ({item}) => {

    const {data, loading, error} = useQuery<any, GetProductAssetQueryVariables>(GetProductAssetDocument, {
        variables: {
            variantId: item.type.key === 'variant' ? item.target.target.id : undefined,
            prodId: item.type.key === 'product' ? item.target.target.id : undefined
        }
    })

    return (
        <div className="product-wrap-plr-1">
            <div className="product-wrap">
                <div className="product-img product-img-zoom mb-25">
                    <a href="product-details.html">
                        {data !== undefined && <img src={`${assetsURL}/${data.getProductAsset.preview}`}  alt="" style={{height: 360, objectFit: "contain"}}/>}
                        {data === undefined && <img src="/images/product/product-151.jpg" alt=""/>}
                    </a>
                </div>
                <div className="product-content">
                    {item.type.key === 'product' && <h4><a href="product-details.html">{item.target.target.productName}</a></h4>}
                    {item.type.key === 'variant' && <h4><a href="product-details.html">{item.target.target.name}</a></h4>}
                </div>
                <div className="product-action-position-1 text-center">
                    <div className="product-content">
                        {item.type.key === 'product' && <h4><a href="product-details.html">{item.target.target.productName}</a></h4>}
                        {item.type.key === 'variant' && <h4><a href="product-details.html">{item.target.target.name}</a></h4>}
                    </div>
                    <div className="product-action-wrap">
                        <div className="product-action-cart">
                            {item.type.key === 'product' && <button title="Add to Cart">Show all</button>}
                            {item.type.key === 'variant' && <button title="Add to Cart">Quick View</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageListItem
