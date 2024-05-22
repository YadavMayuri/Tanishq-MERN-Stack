import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/style.css";
import "../Css/responsive.css";
import PageLoader from "./PageLoader";

const MultipleProduct = () => {
    const router = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const category = new URLSearchParams(location.search).get("category");
                console.log("Category:", category);

                const response = await axios.get("http://localhost:8000/api/getByCategory", {
                    params: { category } // Pass the category as a query parameter
                });

                console.log(response.data, "resp from get product using useLocation");
                if (response.data.success) {
                    setProducts(response.data.products);
                } else {
                    toast.error(response.data.message);
                }
            } catch (err) {
                console.error(err);
                if (err.response && err.response.data && err.response.data.message) {
                    toast.error(err.response.data.message);
                } else {
                    toast.error("An error occurred.");
                }
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, [location.search]);



    return (


        <>

            <Navbar />
            {loading ? (
                <div className="screen">
                    <PageLoader />
                </div>
            ) : (
                <div className="screen">
                    {products?.length ?
                        <div>
                            <div className="products-container">
                                <div className="path">
                                    <div className="path-menu">Home | <span>jewellery</span> </div>
                                </div>
                                <div className="product-count"><span>Jewellery</span> </div>
                                <div className="function-btn-wrapper">
                                    <button className="function-btn" disabled><i className="fa-solid fa-repeat"></i>Compare</button>
                                    <button className="function-btn">sort by: best sellers<i className="fa-solid fa-angle-down"></i></button>
                                </div>


                                <div className="products-wrapper" id="finalTanishqproducts">
                                    {products.map((product) => (
                                        <div key={product._id} onClick={() => router(`/singleProduct/${product._id}`)}>
                                            <div className="products">
                                                <div className="product-image" id="product-img">
                                                    <img src={product.image} alt="" />
                                                </div>
                                                <div className="product-info">
                                                    <div className="hurry">only few left in stock</div>
                                                    <div className="p-name" id="for-product-name">{product.name} </div>
                                                    <div className="p-price" id="for-product-price"> ₹{product.price} </div>
                                                    <div className="p-path">Women | {product.category} </div>
                                                    <button className="explorer-btn">explore now</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div> :

                        <div >
                            <div style={{}}>
                                <div className="mlPnotfounD">
                                    <img src="https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg" alt="" />
                                </div>
                                <div>
                                    <input type="button" style={{ margin: "0 auto" }} value={"Continue Shopping"} className="conShoppingbtn" onClick={() => router('/')} />
                                </div>

                            </div>
                        </div>
                    }


                </div>
            )}


            <Footer />

        </>

    )
}

export default MultipleProduct;