import "../Css/style.css";
import "../Css/responsive.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";


const Cart = ()=>{

    const {state} = useContext(AuthContext)

    const [cartProduct,setCartProduct]= useState([])
    const [totalPrice,setTotalprice] = useState(0)
    const [totalproduct, setTotalProduct]= useState(0)

    useEffect(()=>{
        

    },[state])


    return(
        <>
        
        </>
    )
}
export default Cart;