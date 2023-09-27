import "../../Css/style.css";
import "../../Css/responsive.css";
import "../Profile/AllProfile.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import PageLoader from "../PageLoader";

const ProfileOverview = () => {

    return (
        <>

            <div className="OverViewWrapper">
                <h1>Account Overview</h1>
                <div className="accOverviewWrapper">
                    <div className="accOvTopMenuWrapper">
                        <div className="accLeftTxt">Personal Information</div>
                        <div className="accRightEditPTxt">Edit Details</div>
                    </div>
                    <div className="accInfoWrapper">
                        <div className="accInfoSingleRowWrapper">
                            <div className="accInfoTitile">Name</div>
                            <div className="colon">:</div>
                            <div className="accInfoDetail">Mayuri</div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ProfileOverview;