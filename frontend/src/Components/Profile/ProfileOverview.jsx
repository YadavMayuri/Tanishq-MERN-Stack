import "../../Css/style.css";
import "../../Css/responsive.css";
import "../Profile/AllProfile.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import PageLoader from "../PageLoader";

const ProfileOverview = ()=>{

    return(
        <>
        
        <div className="OverViewWrapper">
            <h1>Account Overview</h1>
        </div>
        
        </>
    )
}

export default ProfileOverview;