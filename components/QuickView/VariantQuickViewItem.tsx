import {assetsURL} from "../../utils/globalconstants";
import React from "react";
import {ProductVariant} from "../../gql";
import {primary} from "../../utils/colorConfig";
import {useRouter} from "next/router";
import {getProdRoute} from "../../utils/routingUtils";

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

    const lowPrice = () => {
        let mainPrice = 0
        for (const pr of item.price!) {
            if (mainPrice === 0) {
                mainPrice = pr.price
            } else if (mainPrice > pr.price) {
                mainPrice = pr.price
            }
        }
        return mainPrice
    }

    const navig = useRouter()

    return (
        <div className="row mt-5 mb-5" key={item.id}>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="product-list-img" style={{padding: 10}}>
                    <a href="javascript:;" onClick={(e) => {
                        e.preventDefault()
                        navig.push(getProdRoute(item.id))
                    }}>
                        <img src={`${assetsURL}/${item.asset.asset.preview}`}  alt="" style={{height: 150, objectFit: "contain"}}/>
                    </a>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="shop-list-content ml-20">
                    <h3><a href="javascript:;" style={{textDecoration: "none"}} onClick={(e) => {
                        e.preventDefault()
                        navig.push(getProdRoute(item.id))
                    }}>{item.name}</a></h3>
                    {item.price!.length === 0}
                    {lowPrice() !== 0 && <div className="pro-list-price">
                        <span>₹{lowPrice()}</span>
                    </div>}
                    {lowPrice() === 0 && <div className="pro-list-price">
                        <span>Unavailable</span>
                    </div>}
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
                            <button title="Add to Cart" style={{backgroundColor: primary}} onClick={(e) => {
                                e.preventDefault()
                                navig.push(getProdRoute(item.id))
                            }}>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VariantQuickViewItem
