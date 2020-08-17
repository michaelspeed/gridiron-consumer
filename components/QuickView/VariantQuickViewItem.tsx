import {assetsURL} from "../../utils/globalconstants";
import React from "react";
import {ProductVariant} from "../../gql";
import {Chip} from "@material-ui/core";

interface Props {
    item: ProductVariant
}

const VariantQuickViewItem = ({item}: Props) => {

    const GatherNames = (opt, miniopt) => {
        let master = ''
        if (item.name.indexOf(opt.code) !== -1) {
            master = master + opt.code + ' / '
        } else if (item.name.indexOf(miniopt.code) !== -1) {
            master = master + miniopt.code + ' / '
        }
        return master
    }

    return (
        <div className="row mt-5 mb-5" key={item.id}>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="product-list-img" style={{padding: 10}}>
                    <a href="product-details.html">
                        <img src={`${assetsURL}/${item.asset.asset.preview}`}  alt="" style={{height: 150, objectFit: "contain"}}/>
                    </a>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="shop-list-content ml-20">
                    <h3><a href="#">{item.name}</a></h3>
                    {item.price!.length === 0}
                    {item.price!.map(price => (
                        <div className="pro-list-price">
                            <span>₹{price.price}</span>
                        </div>
                    ))}
                    <p>
                        {item.product!.options!.map(opt => (
                            <React.Fragment>
                                {opt.options!.map(miniopt => (
                                    <span>{GatherNames(opt, miniopt)}</span>
                                ))}
                            </React.Fragment>
                        ))}
                    </p>
                    <div className="product-list-action">
                        <div className="product-action-cart">
                            <button title="Add to Cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VariantQuickViewItem
