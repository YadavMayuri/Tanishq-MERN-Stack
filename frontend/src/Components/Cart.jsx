import "../Css/style.css";
import "../Css/responsive.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import PageLoader from "./PageLoader";
import { AuthProtected } from "./AuthProtected";


const Cart = () => {
    const router = useNavigate()

    const { state, dispatch } = useContext(AuthContext)

    const [cartProduct, setCartProduct] = useState([])
    const [totalPrice, setTotalprice] = useState(0)
    const [totalProduct, setTotalProduct] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const getCartProduct = async () => {
            setLoading(true)
            try {
                console.log("inside try get pro - frontend");
                const response = await axios.post("http://localhost:8000/api/buyer/getCartProducts", { userId: state?.user?.userId })
                console.log(response.data, "inside try get pro - frontend");

                if (response.data.success) {
                    setCartProduct(response.data.cartProducts)
                    setTotalprice(response.data.totalPrice)
                    setTotalProduct(response.data.totalProducts)
                    setSubTotal(response.data.subTotal)
                    console.log(response.data.cartProducts);
                    console.log(response.data.totalProducts, "response - tot pro from get pro controller");
                } else {
                    return toast.error
                }

            } catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false)
            }

        }
        getCartProduct();
    }, [state])



    async function removeProductfromCart(pId) {
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:8000/api/buyer/removeproduct", { pId, userId: state?.user?.userId })
            if (response.data.success) {
                dispatch({
                    type: "RemoveSingleProduct",
                    payload: response.data.cart
                })
                setCartProduct(response.data.cartProducts)
                setSubTotal(response.data.subTotal)
                setTotalProduct(response.data.totalProducts)
                setTotalprice(response.data.totalPrice)
                toast.success("Product removed from cart!")
                console.log(response.data.totalProducts, "response - tot pro from remove pro controller");

            }
            else {
                return toast.error(response.data.message)
            }
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }

    }


    const buyNow = async () => {
        try {
            console.log(cartProduct, totalPrice, totalProduct, "cart,totalPrice, totalProducts from buynow");
            const response = await axios.post('http://localhost:8000/api/buyer/buyNow', { userId: state?.user?.userId, cartProduct, totalPrice, totalProduct })
            console.log(response, "res from buy now");
            if (response.data.success) {
                dispatch({
                    type: "EmptyCart",
                    payload: response.data.cart
                })
                setCartProduct(response.data.finalCart)
                console.log(response.data.finalCart, "response.data.finalCart--- buy now");
                toast.success("Order placed successfully!");
            } else {
                toast.error("Error while processing transaction!")
            }
        } catch (err) {
            console.log(err);
            toast.error("Internal server error!")
        }
    }

    const handleBuyNow = () => {
        buyNow();
        router('/successpage');
    }
    return (
        <>
            <Navbar />
            {loading ? (
                <div className="screen">
                    <PageLoader />
                </div>
            ) : (
                <AuthProtected>
                    <div className="screen">
                        {cartProduct?.length ?
                            <div>

                                <div className="cart-screen">

                                    <div className="cart-container">
                                        <div className="cart-product-details ">
                                            <div className="left-added-cart-products" id="finalcart">
                                                {cartProduct.map((pro) => (

                                                    <div className="cart-product-add-informatio" key={pro._id}>
                                                        <div className="cart-product-img-name-price">
                                                            <div className="cart-product-image" id="product-img">
                                                                <img src={pro.image} alt="" />
                                                            </div>
                                                            <div className="c-product-name-n-all">
                                                                <div className="product-name-qty">
                                                                    <div className="cart-p-n-price-info">
                                                                        <div className="cart-p-name" id="product-name">
                                                                            {pro.name}
                                                                        </div>
                                                                        <div className="product-cart-code">
                                                                            {pro._id}
                                                                        </div>
                                                                        <div className="cart-prices">
                                                                            <span id="product-price">₹ {pro.price}  </span>
                                                                        </div>

                                                                    </div>
                                                                    <div className="cart-qty-buttons">
                                                                        <button className="decrease-btn" >-</button>
                                                                        <span className="qty-count">1</span>
                                                                        <button className="increase-btn " >+</button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="gift-wishlist-delete-wrapper">
                                                            <div className="gift-wrapper">
                                                                <input type="checkbox" />
                                                                <span className="gift-message">add gift message</span>
                                                            </div>
                                                            <div className="wtWrapp">
                                                                <div className="wishlist-cart-icon">
                                                                    <Icon.Heart className="smIcons" />
                                                                </div>
                                                                <div className="delete-icon" onClick={() => removeProductfromCart(pro._id)}>
                                                                    <Icon.Trash3 className="smIcons" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                ))}
                                            </div>
                                            <div className="right-cart-summary">

                                                <div className="country-pincode-wrapper">
                                                    <div className="country-wrap">
                                                        <fieldset>
                                                            <legend>Country</legend>
                                                            <select name="" id="">
                                                                <option value="">In</option>
                                                                <option value=" ">Australia </option>
                                                                <option value=" ">canada </option>

                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                    <div className="pincode-checck-wrapper">
                                                        <input type="number" placeholder="Pincode" />
                                                        <label>Check</label>
                                                    </div>
                                                </div>

                                                {/* <!-- right-section-2--bill --> */}

                                                <div className="order-summery-wrappwer">
                                                    <div className="enter-code-promo">

                                                        <div className="cart-ent-code">
                                                            Enter Code
                                                        </div>
                                                        <div className="cart-promo-code">
                                                            View Promo Code
                                                        </div>
                                                    </div>

                                                    <div className="coupon-code-cart-wrapper">
                                                        <div className="coupon-cart">
                                                            <input type="number" placeholder="Enter Coupon Code" />
                                                        </div>
                                                        <div className="app-btn">
                                                            <button className="apply-cart-btn">Apply</button>
                                                        </div>
                                                    </div>

                                                    <div className="cart-order-sum">
                                                        <h3>ORDER SUMMERY</h3>
                                                        <div className="order-table">
                                                            <div className="order-spec">
                                                                Total Product Items
                                                            </div>
                                                            <div className="order-amt">
                                                                {totalProduct}
                                                            </div>
                                                        </div>
                                                        <div className="order-table">
                                                            <div className="order-spec" >
                                                                Subtotal
                                                            </div>
                                                            <div className="order-amt" id="subTotalID">
                                                                ₹ {subTotal}
                                                            </div>
                                                        </div>
                                                        <div className="order-table">
                                                            <div className="order-spec">
                                                                Discount
                                                            </div>
                                                            <div className="order-amt">
                                                                - ₹ 2000
                                                            </div>
                                                        </div>
                                                        <div className="order-table">
                                                            <div className="order-spec">
                                                                Delivery Charge
                                                            </div>
                                                            <div className="order-amt">
                                                                FREE
                                                            </div>
                                                        </div>
                                                        <div className="order-table">
                                                            <div className="order-spec">
                                                                TOTAL (Incl of all taxes.)
                                                            </div>
                                                            <div className="order-amt" id="OrderAmtID">
                                                                {totalPrice}
                                                            </div>
                                                        </div>
                                                        <div className="order-table">
                                                            <div className="order-spec">
                                                                YOU SAVE
                                                            </div>
                                                            <div className="order-amt">
                                                                + ₹ 2000
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className="buyNowBTN" onClick={handleBuyNow}>Buy Now</button>

                                                </div>

                                            </div>

                                        </div>



                                    </div>

                                </div>
                            </div> :

                            <div className="emmaindiv">
                                <div className="emptycartImage">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw39d0b5f4/images/cart/Group14779.svg" alt="" />
                                </div>
                                <p className="cemtxt">YOUR CART IS EMPTY </p>
                                <input type="button" value={"Continue Shopping"} className="conShoppingbtn" onClick={() => router('/')} />


                            </div>}
                    </div>

                </AuthProtected>

            )}





            <Footer />

        </>
    )
}
export default Cart;