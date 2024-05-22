import Navbar from "../Navbar";
import "../../Css/style.css";
import "../../Css/responsive.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageLoader from "../PageLoader";
import { useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';
import { SellerProtected } from "../AuthProtected/index";
import * as Icon from 'react-bootstrap-icons';


const SellerAllProducts = () => {
    const router = useNavigate()
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(false);
    const { state } = useContext(AuthContext)

    useEffect(() => {
        async function getProducts() {
            setLoading(true)
            try {
                console.log("hii");

                // const response = await api.post("/getAllProducts")
                const response = await axios.post("http://localhost:3000/api/seller/sellerAllProducts", { sellerId: state?.user?.userId })
                console.log(response.data.products);
                if (response.data.success) {
                    setProducts(response.data.sProducts)
                } else {
                    toast.error(response.data.message)
                }

            } catch (err) {
                console.log(err);
                if (err.response && err.response.data && err.response.data.message) {
                    toast.error(err.response.data.message);
                } else {
                    // Handle any other error cases
                    toast.error("An error occurred.");
                }
            }
            finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [state])


    async function deleteproduct(pId) {
        try {
            console.log("mmmmmmmm");
            const response = await axios.post('http://localhost:3000/api/seller/deleteProduct', { pId })
            console.log(response, "redolgnbjgvvv");
            if (response.data.success) {
                setProducts(products.filter(pro => pro._id !== pId))
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }

        } catch (err) {
            console.log(err);
            return toast.error("Internal server error!")
        }

    }

    return (
        <>
            <Navbar />
            <div>
                {loading ? (
                    <div className="screen">
                        <PageLoader />
                    </div>
                ) : (
                    <SellerProtected>
                        <div className="screen">
                            {products?.length ?
                                <div >
                                    <div className="products-container" >
                                        <div className="path">
                                            <div className="path-menu" style={{ fontSize: "2rem", padding: "0rem 0 0 0" }}>Your Products</div>
                                        </div>
                                        {/* <div className="product-count"><span>Jewellery</span> | 26866 DESIGNS</div> */}

                                        <div className="products-wrapper" id="finalTanishqproducts">
                                            {products.map((product) => (
                                                <div key={product._id}>
                                                    <div className="products">
                                                        <div className="product-image" id="product-img">
                                                            <img src={product.image} alt="" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="hurry">only 1 left in stock</div>
                                                            <div className="p-name" id="for-product-name">{product.name} </div>
                                                            <div className="p-price" id="for-product-price"> ₹{product.price} </div>
                                                            <div className="p-path">Women | {product.category}</div>
                                                            {/* <button className="explorer-btn">explore now</button> */}
                                                            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
                                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: ".4rem" }} onClick={() => router(`/updateProduct/${product._id}`)}>
                                                                    <Icon.PencilSquare style={{ fontSize: "1.3rem" }} />
                                                                    <h2 style={{ fontSize: "1.4rem", color: "black" }}>Update</h2>
                                                                </div>
                                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: ".4rem" }} onClick={() => deleteproduct(product._id)}>
                                                                    <Icon.XSquare style={{ fontSize: "1.3rem", color: "red" }} />
                                                                    <h2 style={{ fontSize: "1.4rem", color: "red" }}>Delete</h2>
                                                                </div>
                                                            </div>
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
                                            <input type="button" style={{ margin: "0 auto" }} value={"Back"} className="conShoppingbtn" onClick={() => router('/sellerdashboard')} />
                                        </div>

                                    </div>
                                </div>
                            }


                        </div>
                    </SellerProtected>
                )}

            </div>

        </>
    )
}

export default SellerAllProducts;