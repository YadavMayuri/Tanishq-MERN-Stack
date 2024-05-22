import { useNavigate, useParams } from "react-router-dom";
import { AuthProtected } from "./AuthProtected";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Toast from "react-hot-toast"
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';
import * as Icon from 'react-bootstrap-icons';
import PageLoader from "./PageLoader";

const SingleProduct = () => {
    const router = useNavigate()
    const { state, dispatch } = useContext(AuthContext)
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function getSingleProduct() {
            setLoading(true)
            try {
                // console.log("inside try-----------------------------");
                const response = await axios.get(`http://localhost:8000/api/getSingleProduct/${id}`)
                if (response.data.success) {
                    setProduct(response.data.response)
                }
                else {
                    Toast.error(response.data.message)
                }

            } catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false)
            }
        }
        getSingleProduct()
    }, [id])


    const addProduct = async () => {
        if (id && state?.user) {
            try {
                console.log(typeof (id), "state?.user?.id");
                const { data } = await axios.post("http://localhost:8000/api/buyer/addCart", { pId: id, userId: state?.user?.userId })
                console.log(data, "data");
                if (data.success) {
                    dispatch({
                        type: "AddToCart",
                        payload: data.cart,
                    })

                    Toast.success("Product added to cart!")
                } else {
                    Toast.error(data.error)
                }

            } catch (err) {
                console.log(err);
                Toast.error("Error while adding product to cart!")
            }
        } else {
            Toast.error("Internal server error!")
        }
    }



    return (
        <>
            <Navbar />

            {loading ? (
                <PageLoader />
            ) : (
                <AuthProtected>
                    <div>
                        {product ? (
                            <div>
                                <div className="main-body">
                                    <div className="sp-container">
                                        <div className="left-product-img-section">
                                            <div className="product-breadcrumb">
                                                <span>Home</span>
                                                <span>|</span>
                                                <span>Diamon Finger Rings</span>
                                                <span>|</span>
                                                <span >{product.name}</span>
                                            </div>
                                            <div className="product-images-pictures">
                                                <div className="product-mini-images">
                                                    <div className="mini-img active-img">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                    <div className="mini-img">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                    <div className="mini-img">
                                                        <img src={product.image} alt="" />
                                                    </div>

                                                </div>

                                                <div className="product-highlight-image">
                                                    <div className="left-swap-arrow">
                                                        <Icon.ChevronLeft style={{ fontSize: "2rem", color: "maroon" }} />
                                                    </div>
                                                    <div className="main-highlight-img">
                                                        <div id="singleProduct"><img src={product.image} alt="" /></div>

                                                    </div>
                                                    <div className="right-swap-arrow">
                                                        <Icon.ChevronRight style={{ fontSize: "2rem", color: "maroon" }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="try-it-on-btn">try it on</button>
                                        </div>
                                        <div className="right-product-decs-section">
                                            <div className="left-product-info-desc">
                                                <p className="product-code"> {product._id}</p>
                                                <div className="product-name-rating">
                                                    <div className="sp-product-name" id="for-product-name">
                                                        {product.name}
                                                    </div>
                                                    <div className="sp-rating-review">
                                                        <span className="sp-star-rating">
                                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                                        </span>
                                                        <span className="sp-heading-review">
                                                            1 Review
                                                        </span>
                                                    </div>
                                                    <hr className="sp-hr" />
                                                    <div className="sp-product-para">
                                                        With the grandeur of gold and elegance of diamonds, this floral ring is crafted in 14 karat
                                                        Yellow gold is ideal for occasion wear. Stone clarity I1I2
                                                    </div>
                                                    <div className="sp-product-price-wrapper">
                                                        <div className="sp-price-w-d">
                                                            <div className="price-in-w">
                                                                price
                                                            </div>
                                                            <div className="price-in-d" id="for-product-price">
                                                                ₹{product.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sp-price-para-info">
                                                        Price inclusive of all taxes.See full <span><a href="">Price Breakup</a></span>
                                                    </div>
                                                    <div className="size-weight-qty-wrapper">
                                                        <div className="size-wrap">
                                                            <div className="sgq-heading">Size</div>
                                                            <div className="sp-size-options">
                                                                <select name="" id="">
                                                                    <option value="">16.80mm</option>
                                                                    <option value="">17.20mm</option>
                                                                    <option value="">16.80mm</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="weight-wrap">
                                                            <div className="sgq-heading">Gross Weight</div>
                                                            <div className="sp-p-weight">1.453g</div>
                                                        </div>
                                                    </div>
                                                    <div className="sp-price-para-info">
                                                        Weight will increase as per the Size. Check <span><a href="">Sizing Comparsion</a></span>
                                                    </div>
                                                    <div className="gold-purity-diamon-weight">
                                                        <div className="gold-purity"> Gold Purity : 14 Kara</div>
                                                        <div className="diamond-weight"> Diamond Weight: 0.090c</div>
                                                    </div>
                                                    <div className="sp-price-para-info">
                                                        Not sure what to buy? Checkout our <span><a href="">Buying Guides</a></span>
                                                    </div>
                                                    {state?.user?.role !== "seller" ? (<>
                                                        <div className="add-buy-btns">
                                                            <div id="for-add-to-cart-btn" onClick={addProduct} className="add-to-cart-btn ">Add To Cart </div>
                                                            <button className="buy-now-btn"> Buy Now</button>
                                                        </div>
                                                    </>) : 
                                                    (<></>)}
                                                    <hr className="sp-hr-linr" />
                                                    <div className="country-pincode">
                                                        <div className="select-country">
                                                            <select name="" id="">
                                                                <option value="">India </option>
                                                                <option value="">Canada </option>
                                                                <option value="">Germany </option>
                                                            </select>
                                                        </div>
                                                        <div className="pincode">
                                                            <input type="number" placeholder="Pincode" />
                                                            <label> check</label>
                                                        </div>
                                                    </div>
                                                    <hr className="sp-hr" />
                                                    <div className="sp-services-info">
                                                        <div className="service-info">
                                                            <div className="service-img">
                                                                <Icon.Gem style={{ fontSize: "1.8rem" }} />
                                                            </div>
                                                            <p>Purity Guaranteed</p>
                                                        </div>
                                                        <div className="service-info">
                                                            <div className="service-img">
                                                                <Icon.ArrowLeftRight style={{ fontSize: "1.8rem" }} />
                                                            </div>
                                                            <p>Easy Returns</p>
                                                        </div>
                                                        <div className="service-info">
                                                            <div className="service-img">
                                                                <Icon.BoxSeam style={{ fontSize: "1.8rem" }} />
                                                            </div>
                                                            <p>Free Shipping across India</p>
                                                        </div>
                                                    </div>
                                                    <div className="question">
                                                        Still Confused What to Buy?
                                                    </div>
                                                    <div className="ans">
                                                        Get on live video call with our design experts, or visit your nearest Tanishq store to get
                                                        an closer look and know more about the product.
                                                    </div>
                                                    <button className="talk-to-expert">Talk to an Expert</button>
                                                    <hr className="sp-hr" />


                                                </div>
                                            </div>
                                            <div className="wishlist-send-icon-wrapper">
                                                <div className="wishlist-icon">
                                                    <Icon.Heart style={{ fontSize: "2rem" }} />
                                                </div>
                                                <div className="send-icon">
                                                    <Icon.Share style={{ fontSize: "2rem" }} />
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="banner-img">
                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites/default/dw05fc6be3/images/pdp/Promises_Banner_DesktopU.jpg" alt="" />
                                    </div>

                                    <div className="product-details-specs">
                                        <div className="sp-product-details-s">
                                            <div className="sp-product-details-heading">
                                                Product details
                                            </div>
                                            <hr className="sp-hr-linr" />
                                            <p className="para-section">
                                                Brighten up your look with this gorgeous finger ring set in rose gold and embellished with diamonds.
                                            </p>
                                            <div className="sp-specifications">
                                                <div className="sp-specs-heading">specifications</div>
                                                <div className="sp-change-left-arrows">
                                                    <Icon.ChevronLeft style={{ fontSize: "2rem" }} /></div>
                                                <div className="sp-change-right-arrows"><Icon.ChevronRight style={{ fontSize: "2rem" }} /></div>

                                            </div>
                                            <div className="sp-product-detail-section">
                                                <div className="sp-spec-name-and-details">
                                                    <div className="sp-specs-name">Quantity : </div>
                                                    <div className="sp-specs-description">1 </div>
                                                </div>
                                                <div className="sp-spec-name-and-details">
                                                    <div className="sp-specs-name">Brand : </div>
                                                    <div className="sp-specs-description">Mia </div>
                                                </div>
                                                <div className="sp-spec-name-and-details">
                                                    <div className="sp-specs-name">Gender : </div>
                                                    <div className="sp-specs-description">Women </div>
                                                </div>
                                                <div className="sp-spec-name-and-details">
                                                    <div className="sp-specs-name">Collestion : </div>
                                                    <div className="sp-specs-description">Core 20 </div>
                                                </div>
                                                <div className="sp-spec-name-and-details">
                                                    <div className="sp-specs-name">product : </div>
                                                    <div className="sp-specs-description">finger ring </div>
                                                </div>
                                            </div>
                                            <div className="product-info-drop-down-list">
                                                <div className="sp-dropdown">
                                                    <h3 className="sp-dropdown-heading">Price breakup</h3>
                                                    <span><i className="fa-solid fa-angle-down"></i></span>
                                                </div>
                                                <div className="sp-dropdown">
                                                    <h3 className="sp-dropdown-heading">Product Story</h3>
                                                    <span><i className="fa-solid fa-angle-down"></i></span>
                                                </div>
                                                <div className="sp-dropdown">
                                                    <h3 className="sp-dropdown-heading">more information</h3>
                                                    <span><i className="fa-solid fa-angle-down"></i></span>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="sp-product-highlight-image">
                                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe5a09b08/images/hi-res/50D3B4FMJAA02_1.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="bottom-section-container">
                                        <h2 className="sp-reviews-heading"> Reviews</h2>
                                        <hr className="sp-hr" />
                                    </div>
                                    <div className="star-rating-reviews">
                                        <div className="star-icon-rate">
                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                            <Icon.Star style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                        </div>
                                        <div className="revies-count">0 Reviews</div>
                                    </div>
                                    <div className="write-review-ask-que">
                                        <button className="w-a-rev">Write a review</button>
                                        <button className="a-a-que">ask a question</button>
                                    </div>
                                    <div className="sp-reviews-questions">
                                        <span className="link-for-q-r  active-link-q-r">Reviews</span>
                                        <span className="link-for-q-r">questions</span>
                                    </div>
                                    <hr className="sp-hr-line" />
                                    <div className="star-rating-link-q-r">
                                        <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                        <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                        <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                        <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                        <Icon.StarFill style={{ fontSize: "1.8rem", color: "maroon", marginRight: ".4rem" }} />
                                    </div>
                                    <button className="first-one-write-review"> Be the first to write a review</button>

                                    <div className="customers-views-product">
                                        <div className="customer-view-heading"> Customers Who Viewed This Also Viewed</div>
                                        <div className="products-wrapper">
                                            <div>
                                                <div className="products">
                                                    <div className="product-image">
                                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea140c33/images/hi-res/50F3C1FACAA32_1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="p-name">Fancy Floral Diamond Finger Ring</div>
                                                        <div className="p-price">₹ 39913 </div>
                                                        <button className="explorer-btn">explore now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="products">
                                                    <div className="product-image">
                                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebbdef94/images/hi-res/501135FKAAA09_1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="p-name">Alluring Floral Diamond Finger Ring</div>
                                                        <div className="p-price">₹ 16524 </div>
                                                        <button className="explorer-btn">explore now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="products">
                                                    <div className="product-image">
                                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe992e549/images/hi-res/50D3C1FFBAA02_1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="p-name">Sleek Seven Stone Floral Motif Diamond Finger Ring</div>
                                                        <div className="p-price">₹ 18093 </div>
                                                        <button className="explorer-btn">explore now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="products">
                                                    <div className="product-image">
                                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd594ffb1/images/hi-res/501047FDEAB02_1.jpg" alt="" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="p-name">Lustrous Diamond Gold Finger Ring</div>
                                                        <div className="p-price">₹ 21811 </div>
                                                        <button className="explorer-btn">explore now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ) : (
                            <div>
                                <div className="PageNotFoundWrap">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0b18ddbd/errorPage/404-Desktop.png" alt="" />
                                </div>
                                <input type="button" className="conShoppingbtn" value={"Back To Home"} onClick={() => router('/')} />
                            </div>
                        )}
                    </div>
                </AuthProtected>
            )}




            <Footer />

        </>

    )
}
export default SingleProduct;