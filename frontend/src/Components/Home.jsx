import React from "react";
import "../Css/style.css";
import "../Css/responsive.css";
import * as Icon from 'react-bootstrap-icons';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import {  useState } from "react";


const Home = () => {
    const { state, dispatch } = useContext(AuthContext)
    const router = useNavigate()
    const [products, setProducts] = useState()

    async function getByCategory(category) {
        try {
            console.log("in grtcat");
            const response = await axios.get('http://localhost:8000/api/getByCategory', {
                params: { category } // Pass the category as a query parameter
            });

            console.log(response.data, "ref from getcat");
            if (response.data.success) {
                setProducts(response.data.products);
                console.log(`Products for category ${category}:`, response.data.products);
            } else {
                toast.error(response.data.message);
                console.error(`Error for category ${category}:`, response.data.message);
            }
        } catch (err) {
            // Handle any network or other errors for each category
            console.error(`Error for category ${category}:`, err);
            toast.error("An error occurred");
        }
    }


    return (
        <div>
            <Navbar />

            <>
                <div className="screen">
                    {/* <!-- slider section----------------- --> */}
                    <div className="image-slider">
                        <div id="slider">
                            <input type="radio" name="slider" id="slide1" defaultChecked readOnly/>
                            <input type="radio" name="slider" id="slide2" readOnly/>
                            <input type="radio" name="slider" id="slide3" readOnly/>
                            <input type="radio" name="slider" id="slide4"readOnly />
                            <div id="slides">
                                <div id="overflow">
                                    <div className="inner">
                                        <div className="slide slide_1">
                                            <div className="slide-content">
                                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw03f65359/homepage/HeroBanner/dordesktopnew.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="slide slide_2">
                                            <div className="slide-content">
                                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe16745e5/homepage/HeroBanner/tom-dbanner.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="slide slide_3">
                                            <div className="slide-content">
                                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdecbdba5/homepage/HeroBanner/desktop-ion.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="slide slide_4">
                                            <div className="slide-content">
                                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf81546aa/homepage/HeroBanner/fod-desktop.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="bullets">
                                <label htmlFor="slide1"></label>
                                <label htmlFor="slide2"></label>
                                <label htmlFor="slide3"></label>
                                <label htmlFor="slide4"></label>
                            </div>
                        </div>

                    </div>

                    {/* <!-- -------------slider ends------------------> */}

                    <div className="second-section-container">

                        {/* shop by category */}

                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Shop Jewellery By Category
                            </h1>
                            <p className="section-para-txt">
                                Browse through your favourite categories. We've got them all!
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="shop-jwell-content">
                            <div className="jwell-left-img-content-info">
                                <a  onClick={() => router(`/MultipleProduct?category=Finger Ring`)} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw11da1930/homepage/shopByCategory/Ring.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">finger rings</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router(`/MultipleProduct?category=Bangle`)} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw94a5b614/homepage/shopByCategory/Bangle.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">bangles</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a  onClick={() => router(`/MultipleProduct?category=Earrings`)}  className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8ea34f31/homepage/shopByCategory/earrings-new.jpg" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">earrings</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a  onClick={() => router(`/MultipleProduct?category=Pendant Set`)} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwacf40d1b/homepage/shopByCategory/pendant-set-new.jpg" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">pendant sets</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router(`/MultipleProduct?category=Necklace`)} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwefbcce7b/homepage/shopByCategory/Neckwear.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">neckwear</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a  onClick={() => router(`/MultipleProduct?category=Engagement Rings`)} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw215de9c7/homepage/shopByCategory/CoupleRing.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">Engagement rings</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div className="jwell-right-img-content-info">
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw489aca65/homepage/shopByCategory/GoldCoin.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">gold coins</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw311c9ba4/homepage/shopByCategory/mangalsutras-new.jpg" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">mangalsutras</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwccb8edee/homepage/shopByCategory/Chain.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">chains</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5b3c542d/homepage/shopByCategory/bracelets-new.jpg" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">bracelets</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6e9345c0/homepage/shopByCategory/nosepins-new.jpg" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">nose pins</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a onClick={() => router('/MultipleProduct')} className="product-link">
                                    <div className="card-jewll-category">
                                        <div className="product-img">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw61d76aef/homepage/shopByCategory/Pendant.png" alt="" />
                                        </div>
                                        <div className="card-product-info">
                                            <h5 className="jwell-name">pendants</h5>
                                            <div className="explore-btn-and-arrow-wrap">
                                                <span className="e-expolre-txt">Explore</span>
                                                <span className="e-card-next-icon"><Icon.ChevronRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* <!-- section-3 shop by collection --> */}

                    <div className="shop-collection-container">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Shop by Collection
                            </h1>
                            <p className="section-para-txt">
                                Whatever the occasion, we've got a beautiful piece of jewellery for you.
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="collection-content-wrapper">
                            <a href="" className="collection-product-desc">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b1c328d/homepage/ShopByCollection/dor-homepage-new.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        dor
                                    </div>
                                    <div className="c-explore-now">
                                        <p className="c-epx-now">Explore now</p>
                                        <span><Icon.ChevronRight /></span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="collection-product-desc">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b9560ad/homepage/ShopByCollection/exclusive-coins-homepage.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        exclusive coins
                                    </div>
                                    <div className="c-explore-now">
                                        <p>Explore now <span><Icon.ChevronRight /></span></p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="collection-product-desc">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw38c90fd5/homepage/ShopByCollection/stunning-ear-homepage.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        stunning every ear
                                    </div>
                                    <div className="c-explore-now">
                                        <p>Explore now <span><Icon.ChevronRight /></span></p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* <!-- section-4---------------- --> */}

                    <div className="top-seller-content">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Top Sellers
                            </h1>
                            <p className="section-para-txt">
                                Check out the products that our customers love the most
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="top-seller-product-content">
                            <div className="top-sell-product-card">
                                <div className="t-s-product-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2b999a5a/images/hi-res/50D4I1DMKADAPL_1.jpg"
                                        alt="" />
                                </div>
                                <div className="t-s-p-info">
                                    <div className="t-s-p-name">
                                        Simple Gold Chain for Kids
                                    </div>
                                    <div className="t-s-p-price">
                                        ₹ 17909
                                    </div>
                                    <div className="e-explore-btn">
                                        Explore
                                    </div>
                                </div>
                            </div>
                            <div className="top-sell-product-card">
                                <div className="t-s-product-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/501002FIOAA09_1.jpg" alt="" />
                                </div>
                                <div className="t-s-p-info">
                                    <div className="t-s-p-name">
                                        Delicate Dainty Diamond Finger Ring
                                    </div>
                                    <div className="t-s-p-price">
                                        ₹ 5659
                                    </div>
                                    <div className="e-explore-btn">
                                        Explore
                                    </div>
                                </div>
                            </div>
                            <div className="top-sell-product-card">
                                <div className="t-s-product-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51D3B11MAABA00_1.jpg" alt="" />
                                </div>
                                <div className="t-s-p-info">
                                    <div className="t-s-p-name">
                                        Leafy Pendant and Earrings Set
                                    </div>
                                    <div className="t-s-p-price">
                                        ₹ 18033
                                    </div>
                                    <div className="e-explore-btn">
                                        Explore
                                    </div>
                                </div>
                            </div>
                            <div className="top-sell-product-card">
                                <div className="t-s-product-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa5de394f/images/hi-res/50D4I1DLZADAPL_1.jpg?sw=640&sh=640"
                                        alt="" />
                                </div>
                                <div className="t-s-p-info">
                                    <div className="t-s-p-name">
                                        14KT Yellow Gold Cupid Drop Earrings
                                    </div>
                                    <div className="t-s-p-price">
                                        ₹ 8710
                                    </div>
                                    <div className="e-explore-btn">
                                        Explore
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- section-5-------------------- --> */}

                    <div className="news-for-you-content-wrappper">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                New For You!
                            </h1>
                            <p className="section-para-txt">
                                Our latest releases, just for you!
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="news-for-u-info">
                            <div className="news-for-y-img">
                                <div className="news-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw113e5f6c/homepage/NewForYou/sparkling-avenues.jpg" alt="" />
                                </div>
                                <button className="news-explore-button">Explore more</button>
                            </div>
                            <div className="news-for-y-img">
                                <div className="news-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6592f9dc/homepage/NewForYou/pretty-in-pink.jpg" alt="" />
                                </div>
                                <button className="news-explore-button">Explore more</button>
                            </div>
                            <div className="news-for-y-img">
                                <div className="news-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw34bef508/homepage/NewForYou/zodiac-coins.jpg" alt="" />
                                </div>
                                <button className="news-explore-button">Explore more</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- section-6-------------- --> */}

                    <div className="shop-by-gender-content-wrapper">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Shop by Gender
                            </h1>
                            <p className="section-para-txt">
                                Explore our latest designs curated just for you!
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="shop-by-gender-info">
                            <a href="" className="collection-product-content-image">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        women
                                    </div>
                                    <div className="c-explore-now">
                                        <p>Explore now <span><Icon.ChevronRight /></span></p>
                                    </div>
                                </div>
                            </a>

                            <div className="shop-by-gender-img-wrapper">
                                <a href="" className="collection-product-content-image">
                                    <div className="collection-product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg" alt="" />
                                    </div>
                                    <div className="collection-product-name-info">
                                        <div className="c-product-name">
                                            men
                                        </div>
                                        <div className="c-explore-now">
                                            <p>Explore now <span><Icon.ChevronRight /></span></p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="collection-product-content-image">
                                    <div className="collection-product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24db1907/homepage/ShopByGender/kid.jpg" alt="" />
                                    </div>
                                    <div className="collection-product-name-info">
                                        <div className="c-product-name">
                                            kids
                                        </div>
                                        <div className="c-explore-now">
                                            <p>Explore now <span><Icon.ChevronRight /></span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>

                    {/* <!-- section-7------------------------------- --> */}


                    <div className="shine-with-nature">
                        <div className="shine-nature-img">
                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb321e397/homepage/posters/giftingbannerdesktop.jpg" alt="" />
                        </div>
                        <button className="news-explore-button">Explore more</button>

                    </div>

                    {/* <!-- section-8----------------------------------- -->/ */}

                    <div className="video-review">
                        <iframe width="100%" height="350"
                            src="https://www.youtube.com/embed/omr0ZiQhUAo?autoplay=1&mute=1&controls=0&rel=0&showinfo=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        <button className="news-explore-button">Explore more</button>

                    </div>

                    {/* <!-- section-9------------------------------------ -->/ */}
                    <div className="rivaah-content">
                        <div className="rivaah-brides">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw93b25375/homepage/posters/Rivaah-Bride.jpg" alt="" />
                        </div>
                        <div className="rivaah-info-img">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc13fe09/homepage/posters/rivah_desktop.jpg" alt="" />
                            <button className="rivaah-explore-button">Explore more</button>
                            <button className="rivaah-callback-button">Arrange a Callback</button>

                        </div>
                    </div>

                    {/* <!-- section-10------------- -->/ */}

                    <div className="jwell-guides-content">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Jewellery Guides
                            </h1>
                            <p className="section-para-txt">
                                Check out our ready made guides to make your buying easier.
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="jwell-guidence">
                            <div className="jwell-left-side">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw82419527/images/home/findringsize.svg" alt="" />
                                <h1 className="guidance-txt">Find Your Ring Size</h1>
                                <div className="j-g-explore-now-btn">
                                    Explore Now <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                </div>
                            </div>
                            <div className="jwell-right-side">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw40c95bdc/images/home/jewllerycare.svg" alt="" />
                                <h1 className="guidance-txt">The Jewellery Care Guide</h1>
                                <div className="j-g-explore-now-btn">
                                    Explore Now <span className="jwell-arrow"><i className="fa-solid fa-arrow-right-long "></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- section-11------------------- --> */}

                    <div className="connect-with-us-content">
                        <div className="section-heading">
                            <h1 className="section-heading-txt">
                                Connect With Us
                            </h1>
                            <p className="section-para-txt">
                                We are always available to guide you at your convenience
                            </p>
                            <div className="section-divider-line">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                            </div>
                        </div>

                        <div className="connect-by-opt">
                            <div className="connect-opt">
                                <div className="connect-info">
                                    <p>Connect On</p>
                                    <h1>WhatsApp</h1>
                                    <div className="wh-connect-btn">
                                        Connect
                                    </div>
                                </div>
                                <div className="connect-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9fa2f775/images/home/whatsapp-icon.svg" alt="" />
                                </div>
                            </div>
                            <div className="connect-opt">
                                <div className="connect-info">
                                    <p>Book An</p>
                                    <h1>Appointment</h1>
                                    <div className="wh-connect-btn">
                                        Book
                                    </div>
                                </div>
                                <div className="connect-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac5fb555/images/home/marker-icon.svg" alt="" />
                                </div>
                            </div>
                            <div className="connect-opt">
                                <div className="connect-info">
                                    <p>Schedule a</p>
                                    <h1>Video Call</h1>
                                    <div className="wh-connect-btn">
                                        Schedule
                                    </div>
                                </div>
                                <div className="connect-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw153e7692/images/home/video-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <Footer />
                </div>
            </>

        </div>
    )
}

export default Home;