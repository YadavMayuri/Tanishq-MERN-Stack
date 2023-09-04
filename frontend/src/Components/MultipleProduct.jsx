import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/style.css";
import "../Css/responsive.css";

const MultipleProduct = () => {
    const router = useNavigate()
    const [products, setProducts] = useState()

    useEffect(() => {
        async function getProducts() {
            try {
                console.log("hii");

                // const response = await api.post("/getAllProducts")
                const response = await axios.get("http://localhost:3000/api/getAllProducts")
                console.log(response.data.products);
                if (response.data.success) {
                    setProducts(response.data.products)
                }else{
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
        }
        getProducts()
    }, [])
    return (


        <>

            <Navbar />

            {products?.length ?
                <div>
                    <div className="products-container">
                        <div className="path">
                            <div className="path-menu">Home | <span>jewellery</span> </div>
                        </div>
                        <div className="product-count"><span>Jewellery</span> | 26866 DESIGNS</div>
                        <div className="function-btn-wrapper">
                            <button className="function-btn" disabled><i className="fa-solid fa-repeat"></i>Compare</button>
                            <button className="function-btn">sort by: best sellers<i className="fa-solid fa-angle-down"></i></button>
                        </div>


                        <div className="products-wrapper" id="finalTanishqproducts">
                            {products.map((product) => (
                                <div  key={product._id} onClick={() => router(`/singleProduct/${product._id}`)}>
                                    <div className="products">
                                        <div className="product-image" id="product-img">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="product-info">
                                            <div className="hurry">only 1 left in stock</div>
                                            <div className="p-name" id="for-product-name">{product.name} </div>
                                            <div className="p-price" id="for-product-price">{product.price} </div>
                                            <div className="p-path">Women | Finger Ring </div>
                                            <button className="explorer-btn">explore now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div> :

                <div style={{ marginTop: "4rem", marginLeft: "60rem", fontSize: "2.6rem" }}><h3>Loading....</h3></div>}


            <Footer />

        </>

    )
}

export default MultipleProduct;