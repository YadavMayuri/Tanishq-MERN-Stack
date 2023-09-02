import { useNavigate, useParams } from "react-router-dom";
import AuthProtected from "./AuthProtected";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Toast from "react-hot-toast"
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';
import * as Icon from 'react-bootstrap-icons';

const SingleProduct = () => {
    const router = useNavigate();
    const { state, dispatch } = useContext(AuthContext)

    const { id } = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        async function getSingleProduct() {

            try {
                console.log("inside try-----------------------------");
                const response = await axios.get(`http://localhost:3000/api/getSingleProduct/${id}`)
                if (response.data.success) {
                    setProduct(response.data.response)
                }
                else {
                    Toast.success(response.data.message)
                }

            } catch (err) {
                console.log(err);
                if (err.response && err.response.data && err.response.data.message) {
                    Toast.error(err.response.data.message);
                } else {
                    // Handle any other error cases
                    console.log(err);
                    Toast.error("An error occurred.");
                }
            }
        }
        getSingleProduct()
    }, [])

    return (
        <>
            <Navbar />
            <AuthProtected>
                {product ? (
                    <div>
                        <div class="main-body">
                            <div class="sp-container">
                                <div class="left-product-img-section">
                                    <div class="product-breadcrumb">
                                        <span>Home</span>
                                        <span>|</span>
                                        <span>Diamon Finger Rings</span>
                                        <span>|</span>
                                        <span>{product.name}</span>
                                    </div>
                                    <div class="product-images-pictures">
                                        <div class="product-mini-images">
                                            <div class="mini-img active-img">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div class="mini-img">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div class="mini-img">
                                                <img src={product.image} alt="" />
                                            </div>

                                        </div>

                                        <div class="product-highlight-image">
                                            <div class="left-swap-arrow">
                                                <Icon.ChevronLeft style={{ fontSize: "2rem", color: "maroon" }} />
                                            </div>
                                            <div class="main-highlight-img">
                                                <div id="singleProduct"><img src={product.image} alt="" /></div>

                                            </div>
                                            <div class="right-swap-arrow">
                                                <Icon.ChevronRight style={{ fontSize: "2rem", color: "maroon" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <button class="try-it-on-btn">try it on</button>
                                </div>
                                <div class="right-product-decs-section">
                                    <div class="left-product-info-desc">
                                        <p class="product-code"> {product._id}</p>
                                        <div class="product-name-rating">
                                            <div class="sp-product-name" id="for-product-name">
                                                {product.name}
                                            </div>
                                            <div class="sp-rating-review">
                                                <span class="sp-star-rating">
                                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                </span>
                                                <span class="sp-heading-review">
                                                    1 Review
                                                </span>
                                            </div>
                                            <hr class="sp-hr" />
                                            <div class="sp-product-para">
                                                With the grandeur of gold and elegance of diamonds, this floral ring is crafted in 14 karat
                                                Yellow gold is ideal for occasion wear. Stone clarity I1I2
                                            </div>
                                            <div class="sp-product-price-wrapper">
                                                <div class="sp-price-w-d">
                                                    <div class="price-in-w">
                                                        price
                                                    </div>
                                                    <div class="price-in-d" id="for-product-price">
                                                        ₹{product.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sp-price-para-info">
                                                Price inclusive of all taxes.See full <span><a href="">Price Breakup</a></span>
                                            </div>
                                            <div class="size-weight-qty-wrapper">
                                                <div class="size-wrap">
                                                    <div class="sgq-heading">Size</div>
                                                    <div class="sp-size-options">
                                                        <select name="" id="">
                                                            <option value="">16.80mm</option>
                                                            <option value="">17.20mm</option>
                                                            <option value="">16.80mm</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="weight-wrap">
                                                    <div class="sgq-heading">Gross Weight</div>
                                                    <div class="sp-p-weight">1.453g</div>
                                                </div>
                                                <div class="qty-wrap">
                                                    <div class="sgq-heading">Qty</div>
                                                    <div class="quantity-content">
                                                        <div class="d-i-btn">-</div>
                                                        <div class="qty-amt">1N</div>
                                                        <div class="d-i-btn">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sp-price-para-info">
                                                Weight will increase as per the Size. Check<span><a href="">Sizing Comparsion</a></span>
                                            </div>
                                            <div class="gold-purity-diamon-weight">
                                                <div class="gold-purity"> Gold Purity : 14 Kara</div>
                                                <div class="diamond-weight"> Diamond Weight: 0.090c</div>
                                            </div>
                                            <div class="sp-price-para-info">
                                                Not sure what to buy? Checkout ourk<span><a href="">Buying Guides</a></span>
                                            </div>
                                            <div class="add-buy-btns" id="for-add-to-cart-btn">
                                                {/* <!-- <div id="for-add-to-cart-btn"> </div>
                            <button class="buy-now-btn"> buy now</button> --> */}
                                            </div>
                                            <hr class="sp-hr-linr" />
                                            <div class="country-pincode">
                                                <div class="select-country">
                                                    <select name="" id="">
                                                        <option value="">India </option>
                                                        <option value="">Canada </option>
                                                        <option value="">Germany </option>
                                                    </select>
                                                </div>
                                                <div class="pincode">
                                                    <input type="number" placeholder="Pincode" />
                                                    <label for=""> check</label>
                                                </div>
                                            </div>
                                            <hr class="sp-hr" />
                                            <div class="sp-services-info">
                                                <div class="service-info">
                                                    <div class="service-img">
                                                        <Icon.Gem style={{ fontSize: "1.8rem" }} />
                                                    </div>
                                                    <p>Purity Guaranteed</p>
                                                </div>
                                                <div class="service-info">
                                                    <div class="service-img">
                                                        <Icon.ArrowLeftRight style={{ fontSize: "1.8rem" }} />
                                                    </div>
                                                    <p>Easy Returns</p>
                                                </div>
                                                <div class="service-info">
                                                    <div class="service-img">
                                                        <Icon.BoxSeam style={{ fontSize: "1.8rem" }} />
                                                    </div>
                                                    <p>Free Shipping across India</p>
                                                </div>
                                            </div>
                                            <div class="question">
                                                Still Confused What to Buy?
                                            </div>
                                            <div class="ans">
                                                Get on live video call with our design experts, or visit your nearest Tanishq store to get
                                                an closer look and know more about the product.
                                            </div>
                                            <button class="talk-to-expert">Talk to an Expert</button>
                                            <hr class="sp-hr" />


                                        </div>
                                    </div>
                                    <div class="wishlist-send-icon-wrapper">
                                        <div class="wishlist-icon">
                                            <Icon.Heart style={{ fontSize: "2rem" }} />
                                        </div>
                                        <div class="send-icon">
                                            <Icon.Share style={{ fontSize: "2rem" }} />
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="banner-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw05fc6be3/images/pdp/Promises_Banner_DesktopU.jpg" alt="" />
                            </div>

                            <div class="product-details-specs">
                                <div class="sp-product-details-s">
                                    <div class="sp-product-details-heading">
                                        Product details
                                    </div>
                                    <hr class="sp-hr-linr" />
                                    <p class="para-section">
                                        Brighten up your look with this gorgeous finger ring set in rose gold and embellished with diamonds.
                                    </p>
                                    <div class="sp-specifications">
                                        <div class="sp-specs-heading">specifications</div>
                                        <div class="sp-change-left-arrows">
                                        <Icon.ChevronLeft style={{fontSize:"2rem"}}/></div>
                                        <div class="sp-change-right-arrows"><Icon.ChevronRight style={{fontSize:"2rem"}}/></div>

                                    </div>
                                    <div class="sp-product-detail-section">
                                        <div class="sp-spec-name-and-details">
                                            <div class="sp-specs-name">Quantity : </div>
                                            <div class="sp-specs-description">1 </div>
                                        </div>
                                        <div class="sp-spec-name-and-details">
                                            <div class="sp-specs-name">Brand : </div>
                                            <div class="sp-specs-description">Mia </div>
                                        </div>
                                        <div class="sp-spec-name-and-details">
                                            <div class="sp-specs-name">Gender : </div>
                                            <div class="sp-specs-description">Women </div>
                                        </div>
                                        <div class="sp-spec-name-and-details">
                                            <div class="sp-specs-name">Collestion : </div>
                                            <div class="sp-specs-description">Core 20 </div>
                                        </div>
                                        <div class="sp-spec-name-and-details">
                                            <div class="sp-specs-name">product : </div>
                                            <div class="sp-specs-description">finger ring </div>
                                        </div>
                                    </div>
                                    <div class="product-info-drop-down-list">
                                        <div class="sp-dropdown">
                                            <h3 class="sp-dropdown-heading">Price breakup</h3>
                                            <span><i class="fa-solid fa-angle-down"></i></span>
                                        </div>
                                        <div class="sp-dropdown">
                                            <h3 class="sp-dropdown-heading">Product Story</h3>
                                            <span><i class="fa-solid fa-angle-down"></i></span>
                                        </div>
                                        <div class="sp-dropdown">
                                            <h3 class="sp-dropdown-heading">more information</h3>
                                            <span><i class="fa-solid fa-angle-down"></i></span>
                                        </div>

                                    </div>

                                </div>
                                <div class="sp-product-highlight-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Catalog/502015FEPAA02_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                                </div>
                            </div>

                            <div class="bottom-section-container">
                                <h2 class="sp-reviews-heading"> Reviews</h2>
                                <hr class="sp-hr" />
                            </div>
                            <div class="star-rating-reviews">
                                <div class="star-icon-rate">
                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                    <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                </div>
                                <div class="revies-count">0 Reviews</div>
                            </div>
                            <div class="write-review-ask-que">
                                <button class="w-a-rev">Write a review</button>
                                <button class="a-a-que">ask a question</button>
                            </div>
                            <div class="sp-reviews-questions">
                                <span class="link-for-q-r  active-link-q-r">Reviews</span>
                                <span class="link-for-q-r">questions</span>
                            </div>
                            <hr class="sp-hr-line" />
                            <div class="star-rating-link-q-r">
                                <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                            </div>
                            <button class="first-one-write-review"> Be the first to write a review</button>

                            <div class="customers-views-product">
                                <div class="customer-view-heading"> Customers Who Viewed This Also Viewed</div>
                                <div class="products-wrapper">
                                    <div>
                                        <div class="products">
                                            <div class="product-image">
                                                <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50D2I1FCTAA02_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                                            </div>
                                            <div class="product-info">
                                                <div class="p-name">Fancy Floral Diamond Finger Ring</div>
                                                <div class="p-price">₹ 39913 </div>
                                                <button class="explorer-btn">explore now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="products">
                                            <div class="product-image">
                                                <img src="https://staticimg.titan.co.in/Tanishq/Catalog/500067FYAAA12_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                                            </div>
                                            <div class="product-info">
                                                <div class="p-name">Alluring Floral Diamond Finger Ring</div>
                                                <div class="p-price">₹ 16524 </div>
                                                <button class="explorer-btn">explore now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="products">
                                            <div class="product-image">
                                                <img src="https://staticimg.titan.co.in/Tanishq/Catalog/500496FDAAB09_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                                            </div>
                                            <div class="product-info">
                                                <div class="p-name">Sleek Seven Stone Floral Motif Diamond Finger Ring</div>
                                                <div class="p-price">₹ 18093 </div>
                                                <button class="explorer-btn">explore now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="products">
                                            <div class="product-image">
                                                <img src="https://staticimg.titan.co.in/Tanishq/Catalog/502015FEPAA02_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                                            </div>
                                            <div class="product-info">
                                                <div class="p-name">Lustrous Diamond Gold Finger Ring</div>
                                                <div class="p-price">₹ 21811 </div>
                                                <button class="explorer-btn">explore now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                ) : (
                    <div></div>
                )}

            </AuthProtected>
            <Footer />

        </>

    )
}
export default SingleProduct;