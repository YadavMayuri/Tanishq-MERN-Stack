import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Navbar from "../Navbar";
import "../../Css/style.css";
import "../../Css/responsive.css";
import { SellerProtected } from "../AuthProtected/index";
import { useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';


const AddProduct = () => {

    const { state} = useContext(AuthContext)

    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handlesub");

        const { name, price, image, category } = productData;
        console.log(name, price, image, category);
        console.log(productData, "productData");
        try {
            console.log("inside try");

            const response = await axios.post("http://localhost:3000/api/seller/addProduct", { productData, userId: state?.user?.userId })

            console.log(response, "resss");
            if (response.data.success) {
                setProductData({ name: '', price: '', image: '', category: '' })
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
            <Navbar />
            <SellerProtected>
                <form onSubmit={handleSubmit} style={{ padding: "3.4rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px .3rem .8rem", textAlign: "center" }} className="addProT">
                    <h1 style={{ fontSize: "3rem" }}>Add Product</h1>
                    <input type="text" name="name" onChange={handleChange} placeholder="Product Name" style={{ marginTop: "2rem" }} /><br />
                    <input type="number" name="price" onChange={handleChange} placeholder="Product Price" style={{ marginTop: "2rem" }} /><br />
                    <input type="text" name="category" onChange={handleChange} placeholder="Product Category" style={{ marginTop: "2rem" }} /><br />
                    <input type="text" name="image" onChange={handleChange} placeholder="Product Image URL" style={{ marginTop: "2rem" }} /><br />
                    <input type="submit" style={{ marginTop: "20px", backgroundColor: "maroon", color: "white", outline: "none", border: "none" }} />
                </form>
            </SellerProtected>

        </div>
    )
}

export default AddProduct;