import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
            <h1 style={{ marginTop: "30px",textAlign:"center" }}>Multiple products</h1>
            {/* <button onClick={() => router('/singleProduct/2521')} className="btn btn-primary mt-3">Redirect to single product</button> */}

            {products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly",marginTop:"30px",fontFamily:"Times New Roman" }}>

                {products.map((product) => (
                    <div onClick={() => router(`/singleProduct/${product._id}`)} style={{ width: "330px", border: "1px solid lightgray",cursor:"pointer",padding:"1.4rem" }}>
                        <img src={product.image} alt="" style={{ width: "100%", height: "300px", objectFit: "contain" }} />
                        <p  style={{ fontSize: "16px", textAlign: "left",marginTop:".6rem" }}>Product ID : {product._id}</p>
                        <p  style={{ fontSize: "16px", textAlign: "left",marginTop:".6rem" }}>Product Name : {product.name}</p>
                        <p style={{ fontSize: "16px", textAlign: "left",marginTop:".6rem" }}>Product Price : {product.price}</p>
                    </div>

                ))}


            </div> : <div style={{ marginTop: "4rem",marginLeft:"60rem",fontSize:"1.6rem" }}> <h4>Loading.....</h4> </div>}
        </>
    )
}

export default MultipleProduct;