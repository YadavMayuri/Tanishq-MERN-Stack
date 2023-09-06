import Navbar from "./Navbar";
import "../Css/style.css";
import "../Css/responsive.css";
import { SellerProtected } from "./AuthProtected";


const SellerDashboard = () => {
    return (
        <>
            <Navbar />
            <SellerProtected>
                <div className="sbdWrapper">
                    <div className="sdbheadwrap">
                        <h1 style={{ marginTop: "2rem", fontSize: "2.8rem", color: "#912623" }}>Seller Dashboard</h1>
                        <h2 style={{ marginTop: "2rem", fontSize: "2.8rem", }}>Welcome!</h2>
                    </div>
                </div>

            </SellerProtected>


        </>
    )
}

export default SellerDashboard;