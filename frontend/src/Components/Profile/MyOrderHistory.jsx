import "../../Css/style.css";
import "../../Css/responsive.css";
import "../Profile/AllProfile.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import PageLoader from "../PageLoader";
import * as Icon from "react-bootstrap-icons";


const MyOrdersHistory = () => {
    const { state } = useContext(AuthContext)
    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        const getOrderHistory = async () => {
            setLoading(true)
            try {
                const response = await axios.post('http://localhost:3000/api/buyer/getOrderHistory', { userId: state?.user?.userId })
                console.log(response, "res from get history");
                if (response.data.success) {
                    setOrderData(response.data.orderHistory)
                } else {
                    toast.error(response.data.error)
                }


            } catch (err) {
                console.log(err);
                toast.error("Internal server error!")
            } finally {
                setLoading(false)
            }
        }
        if (state?.user) {
            getOrderHistory()
        }

    }, [state])
    return (
        <>
            {loading ? (
                <div className="commonScreen">
                    <PageLoader />
                </div>
            ) : (
                <>
                    {orderData?.length ? (
                        <>


                        </>) : (
                        <>
                            <div className="screen">
                                <div className="emmaindiv">
                                    <div className="emptycartImage" >
                                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd15e3cb8/images/no-order.svg" alt="" />
                                    </div>
                                    <p className="cemtxt" >No Order Details Yet ! </p>
                                    <input type="button" value={"Continue Shopping"} style={{ padding: "1rem 3rem" }} className="conShoppingbtnInOrder" onClick={() => router('/')} />
                                </div>
                            </div>


                        </>)}
                </>
            )}


        </>
    )
}

export default MyOrdersHistory;