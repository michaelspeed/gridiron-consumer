import Layout from "../../components/Layout";
import {Asset, GetHomePageDocument, GetMenuDocument, GetSingleProductVariantDocument, ProductVariant} from "../../gql";
import withApollo from "../../utils/withApollo";
import useScripts from "../../utils/useScript";
import {useEffect, useState} from "react";
import {assetsURL} from "../../utils/globalconstants";
import clsx from "clsx";

interface Props {
    menu: any,
    variant: ProductVariant
}

const SingleProduct = ({menu, variant}: Props) => {

    const [allAssets, setAllAllAssets] = useState<Asset[]>([])

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

    console.log(variant)
    useScripts('/js/main.js')

    return (
        <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu}>
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
                                    <div className="product-ratting-digit-wrap">
                                        <div className="product-ratting">
                                            <i className="icon-rating"></i>
                                            <i className="icon-rating"></i>
                                            <i className="icon-rating"></i>
                                            <i className="icon-rating"></i>
                                            <i className="icon-star-empty"></i>
                                        </div>
                                        <div className="product-digit">
                                            <span>4.0</span>
                                        </div>
                                    </div>
                                    <div className="product-review-order">
                                        <span>62 Reviews</span>
                                        <span>242 orders</span>
                                    </div>
                                </div>
                                <p>Seamlessly predominate enterprise metrics without performance based process
                                    improvements.</p>
                                <div className="pro-details-price">
                                    <span>US $75.72</span>
                                    <span className="old-price">US $95.72</span>
                                </div>
                                {variant.product.options.map(item => (
                                    <div className="pro-details-size">
                                        <span>{item.name}:</span>
                                        <div className="pro-details-size-content">
                                            <ul>
                                                {item.options.map(opt => (
                                                    <li><a href="#" style={{width: "inherit", paddingLeft: 5, paddingRight: 5}}>{opt.name}</a></li>
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
                                <div className="pro-details-action-wrap">
                                    <div className="pro-details-buy-now">
                                        <a href="#">Buy Now</a>
                                    </div>
                                    <div className="pro-details-action">
                                        <a title="Add to Cart" href="#"><i className="icon-basket"></i></a>
                                        <a title="Add to Wishlist" href="#"><i className="icon-heart"></i></a>
                                        <a className="social" title="Social" href="#"><i className="icon-share"></i></a>
                                        <div className="product-dec-social">
                                            <a className="facebook" title="Facebook" href="#"><i
                                                className="icon-social-facebook-square"></i></a>
                                            <a className="twitter" title="Twitter" href="#"><i
                                                className="icon-social-twitter"></i></a>
                                            <a className="instagram" title="Instagram" href="#"><i
                                                className="icon-social-instagram"></i></a>
                                            <a className="pinterest" title="Pinterest" href="#"><i
                                                className="icon-social-pinterest"></i></a>
                                        </div>
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
                                    <div className="specification-wrap table-responsive">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td className="width1">Name</td>
                                                <td>Salwar Kameez</td>
                                            </tr>
                                            <tr>
                                                <td>SKU</td>
                                                <td>0x48e2c</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Models</td>
                                                <td>FX 829 v1</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Categories</td>
                                                <td>Digital Print</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Size</td>
                                                <td>60’’ x 40’’</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Brand</td>
                                                <td>Individual Collections</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Color</td>
                                                <td>Black, White</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="des-details3" className="tab-pane">
                                    <div className="review-wrapper">
                                        <h2>1 review for Sleeve Button Cowl Neck</h2>
                                        <div className="single-review">
                                            <div className="review-img">
                                                <img src="assets/images/product-details/client-1.png" alt=""/>
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-name">
                                                        <h5><span>John Snow</span> - March 14, 2019</h5>
                                                    </div>
                                                    <div className="review-rating">
                                                        <i className="yellow icon-rating"></i>
                                                        <i className="yellow icon-rating"></i>
                                                        <i className="yellow icon-rating"></i>
                                                        <i className="yellow icon-rating"></i>
                                                        <i className="yellow icon-rating"></i>
                                                    </div>
                                                </div>
                                                <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas
                                                    magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales
                                                    orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus
                                                    scelerisque</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ratting-form-wrapper">
                                        <span>Add a Review</span>
                                        <p>Your email address will not be published. Required fields are
                                            marked <span>*</span></p>
                                        <div className="ratting-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Name <span>*</span></label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Email <span>*</span></label>
                                                            <input type="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="star-box-wrap">
                                                            <div className="single-ratting-star">
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                                <a href="#"><i className="icon-rating"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Your review <span>*</span></label>
                                                            <textarea name="Your Review"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-submit">
                                                            <input type="submit" value="Submit"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area pb-155">
                <div className="container">
                    <div className="section-title-8 mb-65">
                        <h2>You May Like Also</h2>
                    </div>
                    <div className="product-slider-active-4">
                        <div className="product-wrap-plr-1">
                            <div className="product-wrap">
                                <div className="product-img product-img-zoom mb-25">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-151.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Product Title</a></h4>
                                    <div className="product-price">
                                        <span>$ 124</span>
                                        <span className="old-price">$ 130</span>
                                    </div>
                                </div>
                                <div className="product-action-position-1 text-center">
                                    <div className="product-content">
                                        <h4><a href="product-details.html">Product Title</a></h4>
                                        <div className="product-price">
                                            <span>$ 124</span>
                                            <span className="old-price">$ 130</span>
                                        </div>
                                    </div>
                                    <div className="product-action-wrap">
                                        <div className="product-action-cart">
                                            <button title="Add to Cart">Add to cart</button>
                                        </div>
                                        <button data-toggle="modal" data-target="#exampleModal"><i
                                            className="icon-zoom"></i></button>
                                        <button title="Add to Compare"><i className="icon-compare"></i></button>
                                        <button title="Add to Wishlist"><i className="icon-heart-empty"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap-plr-1">
                            <div className="product-wrap">
                                <div className="product-img product-img-zoom mb-25">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-152.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Product Title</a></h4>
                                    <div className="product-price">
                                        <span>$ 124</span>
                                        <span className="old-price">$ 130</span>
                                    </div>
                                </div>
                                <div className="product-action-position-1 text-center">
                                    <div className="product-content">
                                        <h4><a href="product-details.html">Product Title</a></h4>
                                        <div className="product-price">
                                            <span>$ 124</span>
                                            <span className="old-price">$ 130</span>
                                        </div>
                                    </div>
                                    <div className="product-action-wrap">
                                        <div className="product-action-cart">
                                            <button title="Add to Cart">Add to cart</button>
                                        </div>
                                        <button data-toggle="modal" data-target="#exampleModal"><i
                                            className="icon-zoom"></i></button>
                                        <button title="Add to Compare"><i className="icon-compare"></i></button>
                                        <button title="Add to Wishlist"><i className="icon-heart-empty"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap-plr-1">
                            <div className="product-wrap">
                                <div className="product-img product-img-zoom mb-25">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-153.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Product Title</a></h4>
                                    <div className="product-price">
                                        <span>$ 124</span>
                                        <span className="old-price">$ 130</span>
                                    </div>
                                </div>
                                <div className="product-action-position-1 text-center">
                                    <div className="product-content">
                                        <h4><a href="product-details.html">Product Title</a></h4>
                                        <div className="product-price">
                                            <span>$ 124</span>
                                            <span className="old-price">$ 130</span>
                                        </div>
                                    </div>
                                    <div className="product-action-wrap">
                                        <div className="product-action-cart">
                                            <button title="Add to Cart">Add to cart</button>
                                        </div>
                                        <button data-toggle="modal" data-target="#exampleModal"><i
                                            className="icon-zoom"></i></button>
                                        <button title="Add to Compare"><i className="icon-compare"></i></button>
                                        <button title="Add to Wishlist"><i className="icon-heart-empty"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap-plr-1">
                            <div className="product-wrap">
                                <div className="product-img product-img-zoom mb-25">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-154.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Product Title</a></h4>
                                    <div className="product-price">
                                        <span>$ 124</span>
                                        <span className="old-price">$ 130</span>
                                    </div>
                                </div>
                                <div className="product-action-position-1 text-center">
                                    <div className="product-content">
                                        <h4><a href="product-details.html">Product Title</a></h4>
                                        <div className="product-price">
                                            <span>$ 124</span>
                                            <span className="old-price">$ 130</span>
                                        </div>
                                    </div>
                                    <div className="product-action-wrap">
                                        <div className="product-action-cart">
                                            <button title="Add to Cart">Add to cart</button>
                                        </div>
                                        <button data-toggle="modal" data-target="#exampleModal"><i
                                            className="icon-zoom"></i></button>
                                        <button title="Add to Compare"><i className="icon-compare"></i></button>
                                        <button title="Add to Wishlist"><i className="icon-heart-empty"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap-plr-1">
                            <div className="product-wrap">
                                <div className="product-img product-img-zoom mb-25">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-152.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Product Title</a></h4>
                                    <div className="product-price">
                                        <span>$ 124</span>
                                        <span className="old-price">$ 130</span>
                                    </div>
                                </div>
                                <div className="product-action-position-1 text-center">
                                    <div className="product-content">
                                        <h4><a href="product-details.html">Product Title</a></h4>
                                        <div className="product-price">
                                            <span>$ 124</span>
                                            <span className="old-price">$ 130</span>
                                        </div>
                                    </div>
                                    <div className="product-action-wrap">
                                        <div className="product-action-cart">
                                            <button title="Add to Cart">Add to cart</button>
                                        </div>
                                        <button data-toggle="modal" data-target="#exampleModal"><i
                                            className="icon-zoom"></i></button>
                                        <button title="Add to Compare"><i className="icon-compare"></i></button>
                                        <button title="Add to Wishlist"><i className="icon-heart-empty"></i></button>
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

SingleProduct.getInitialProps = async (ctx) => {
    const client = ctx.apolloClient;
    const id = ctx.query.id
    console.log(id)
    const menu = await client.query({
        query: GetMenuDocument
    })
    const variant = await client.query({
        query: GetSingleProductVariantDocument,
        variables: {
            id
        }
    })
    return {
        menu,
        variant: variant.data.getSingleProductVariant
    }
}

export default withApollo(SingleProduct)
