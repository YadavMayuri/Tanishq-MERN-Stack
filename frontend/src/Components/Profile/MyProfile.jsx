import Navbar from "../Navbar";
import "../../Css/style.css"
import "../../Css/responsive.css"
import "../Profile/AllProfile.css"
import classnames from "classnames";  // npm i classnames to add additional style
import MyOrderHistory from "./MyOrderHistory";
import ProfileOverview from "./ProfileOverview"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyProfile = () => {

    const [selectedOption, setSelectedOption] = useState("ProfileOverview");
    const { state } = useContext(AuthContext)
    const renderRightSideComponent = () => {
        switch (selectedOption) {
            case 'ProfileOverview':
                return <ProfileOverview />;
            case 'MyOrderHistory':
                return <MyOrderHistory />

            default:
                return null;
        }
    };


    return (
        <>
            <Navbar />
            <div className="screen">
                <div className="MyorofileWrapper">
                    <h1>My Account</h1>

                    <div className="myprofotablewrapper">
                        <div className="prLeftOptWrap">
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'ProfileOverview', 'unselected-option': selectedOption !== 'ProfileOverview', })} onClick={() => setSelectedOption('ProfileOverview')}>
                                Overview
                            </div>
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'MyOrderHistory', 'unselected-option': selectedOption !== 'MyOrderHistory', })} onClick={() => setSelectedOption('MyOrderHistory')}>
                                Order History
                            </div>
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'wishlist', 'unselected-option': selectedOption !== 'wishlist', })}>
                                Wishlist
                            </div>
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'DigitalGold', 'unselected-option': selectedOption !== 'DigitalGold', })}>
                                Tanishq Digital Gold
                            </div>
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'PersonalInfo', 'unselected-option': selectedOption !== 'PersonalInfo', })}>
                                Personal Information
                            </div>
                            <div className={classnames('mPrOpt', { 'selected-option': selectedOption === 'AddressBook', 'unselected-option': selectedOption !== 'AddressBook', })}>
                                Address Book
                            </div>

                        </div>
                        <div className="rightSideInfoWrap">
                            {renderRightSideComponent()}
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default MyProfile;