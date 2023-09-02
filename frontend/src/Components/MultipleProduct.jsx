import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
                    <div class="products-container">
                        <div class="path">
                            <div class="path-menu">Home | <span>jewellery</span> </div>
                        </div>
                        <div class="product-count"><span>Jewellery</span> | 26866 DESIGNS</div>
                        <div class="function-btn-wrapper">
                            <button class="function-btn" disabled><i class="fa-solid fa-repeat"></i>Compare</button>
                            <button class="function-btn">sort by: best sellers<i class="fa-solid fa-angle-down"></i></button>
                        </div>


                        <div class="products-wrapper" id="finalTanishqproducts">
                            {products.map((product) => (
                                <div  onClick={() => router(`/singleProduct/${product._id}`)}>
                                    <div class="products">
                                        <div class="product-image" id="product-img">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div class="product-info">
                                            <div class="hurry">only 1 left in stock</div>
                                            <div class="p-name" id="for-product-name">{product.name} </div>
                                            <div class="p-price" id="for-product-price">{product.price} </div>
                                            <div class="p-path">Women | Finger Ring </div>
                                            <button class="explorer-btn">explore now</button>
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