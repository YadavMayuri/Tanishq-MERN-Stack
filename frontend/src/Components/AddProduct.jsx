import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Navbar from "./Navbar";
import "../Css/style.css";
import "../Css/responsive.css";

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: ""})
    const router = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handlesub");

        const { name, price, image } = productData;
        console.log(name, price, image);
        console.log(productData,"productData");
        try {
            console.log("inside try");
            // const response = await axios.post("http://localhost:3000/api/addProduct", {productData})
            const response = await axios.post("http://localhost:3000/api/addProduct", productData)

            console.log(productData);
            if (response.data.success) {
                setProductData({ name: '', price: '', image: '' })
                toast.success(response.data.message)
            }
            else {
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

    return (

        <div className="screen">
            <Navbar/>
            <form onSubmit={handleSubmit} style={{  padding: "3.4rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px .3rem .8rem", width: "50rem", margin: "6rem auto" ,textAlign:"center"}} className="addProT">
                <h1 style={{ fontSize: "3rem"}}>Add Product</h1>
                <input type="text" name="name" onChange={handleChange} placeholder="Product Name" style={{ marginTop: "2rem" }} /><br />
                <input type="number" name="price" onChange={handleChange} placeholder="Product Price" style={{ marginTop: "2rem" }} /><br />
                <input type="text" name="image" onChange={handleChange} placeholder="Product Image URL" style={{ marginTop: "2rem"}} /><br />
                <input type="submit" style={{ marginTop: "20px",backgroundColor:"maroon",color:"white",outline:"none",border:"none"}} />
            </form>
        </div>
    )
}

export default AddProduct;