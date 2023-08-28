import React from "react";
import "../Css/style.css"
import "../Css/responsive.css"
import * as Icon from 'react-bootstrap-icons';

const Home = () => {
    return (
        <div>
            <div id="screen">
                <header>
                    <div className="top-navbar">
                        <div className="top-navbar-wrapper">
                            <div className="logo-hamburger-wrapper">
                                <a className="hamburger-content-wrapper">
                                    <Icon.List />
                                </a>
                                <a href="./addproducts.html" className="tanishq-logo">
                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQuODMgNzQuNzkiPjxkZWZzPjxzdHlsZT4uYntmaWxsOiM4MzI3Mjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNMzguNzksNy41NWMtLjYyLTIuOTEsMS4zMi01LjU2LDQuMTUtNS41Nmg3Ljk1YzIuMTIsLjA5LDQuNzctMS41OSw0Ljc3LTEuNTlWMTMuNzNjMCwxMy41MS03LjQyLDE5LjI0LTEwLjg2LDE5Ljc3LS42MiwuMjctMS4wNiwuMDktLjI2LS41Myw0LjY4LTMsNy40Mi0xMC4xNSw3LjY4LTE2LjI0VjQuNTVjLS45NywuNjItMi44MiwuNzEtMi44MiwuNzFoLTYuOTdjLTEuODUsMC0yLjgyLC42Mi0zLjYyLDIuMjltMzUuNTgsMGMuNjItMi45MS0xLjI0LTUuNTYtNC4xNS01LjU2aC03Ljk1Yy0yLjAzLC4wOS00Ljc3LTEuNTktNC43Ny0xLjU5VjEzLjczYzAsMTMuNTEsNy40MiwxOS4yNCwxMC44NiwxOS43NywuNjIsLjI3LDEuMDYsLjA5LC4yNy0uNTMtNC42OC0zLTcuNDItMTAuMTUtNy42OC0xNi4yNFY0LjU1Yy45NywuNjIsMi44MiwuNzEsMi44MiwuNzFoNy4wNmMxLjg1LDAsMi44MywuNjIsMy41MywyLjI5aDBaTTIwLjI2LDYyLjk5Yy0uNzEtMS43Ny0uMTgtMy43MSwuMjYtNC40MWg4LjAzdjQuNDFoMi4wM3YtMTkuNTFzLS42Mi0uMDktMS4wNiwuNjJjLTMsNC43Ny01LjMsNi04LjY1LDkuMzYtMi44MywyLjgyLTQuOTQsNi0zLjg5LDkuNTNoMy4yN1ptLjg4LTUuNzRoNy40MnYtOC4zOWMtMS44NSwzLjQ0LTYuMjcsNS4zLTcuNDIsOC4zOVptODQuOTMtMTUuOGMtMi41NiwyLjAzLTQuNjgsMy44LTUuODMsNi40NC0xLjI0LDIuNjUtMS41OSw2LjQ0LDAsOS43MSwxLjc3LDMuNjIsMy44LDUuNTYsNi4xOCw3Ljk0LDEuNjgsMS44NSw0Ljg2LDUuNTYsMy44LDguODMsLjc5LDAsMS44NS0xLjk0LDIuMDMtMi42NSwuNDQtMi4yOSwuMTgtMy40NC0uNzktNS4xMi0uNjItMS4xNS0xLjk0LTIuMjktMi45MS0zLjQ0LDEuNDEtMS4xNSwyLjkxLTIuODMsNC4xNS00LjUsMS41OS0yLjIxLDIuNTYtNS45MSwuNTMtOS41My0xLjg1LTMuNDQtNy4wNi02LjYyLTcuMTUtNy42OGgwWm0xLjA2LDIwLjM5Yy0yLjAzLTEuNjgtMy4yNy0zLjA5LTQuNS01LjgzLTEuMjQtMi40Ny0xLjMyLTUuMzktLjc5LTcuNDIsLjYyLTIuMjEsMi4xMi0zLjgsMy41My00Ljk0LDEuNTksMS4xNSwzLjI3LDIuNTYsNC41LDQuNTksMi4wMywzLjQ0LDIuMDMsNS45MSwuNzEsOS4yNy0uNzksMS45NC0xLjY4LDMuMDktMy40NCw0LjMzaDBaTS41Nyw0NS4wN2MtLjM1LS43MSwuMTgtMi41NiwyLjMtMi4zOEgxMy4yOGMxLjMyLC4wOSwyLjEyLS44OCwzLjgtLjcxLTIuMzgsMS45NC0yLjY1LDIuOTEtMy4wOSw0Ljc3bC0xLjY4LDEzLjY4Yy0uNDQsNS41NiwxLjE1LDEwLjE1LDUuMywxMy45NS0yLjU2LC4zNS04LjEyLTMuNzEtOC4zLTExLjEyLS4xOC0zLjcxLC44OC0xNS41NCwuODgtMTUuNTQsLjI2LTEuOTQsMS41LTMuMzUsMS41LTMuMzVIMS44Yy0uNjIsLjA5LS45NywuMDktMS4yNCwuNzFILjU3Wm04MS44NCwxNy4zOWgyLjU2di01LjIxaDYuOTd2NS40N2gyLjY1di0xOC44OWgtMi42NXYxMS45MmgtNi45N3YtMTEuOTJoLTIuNTZ2MTguNjNoMFptLTcuMTUtMTQuMjFjLS42MiwuMTgtMS4yNC0uMDktMS44NS0uNjItLjg4LS43OS0xLjI0LTEuNTktMi4zOC0yLjI5LTEuMjQtLjYyLTMtLjcxLTQuMDYsLjA5LS45NywuNzEtLjk3LDIuMywuMDksMy4xOCwyLjAzLDEuNTksNC4yNCwyLjQ3LDYuOCwzLjgsNC42OCwyLjQ3LDUuNDcsNi44LDIuMjEsOS0yLjc0LDEuODUtNi4xOCwyLjAzLTkuMjcsLjg4LTIuMzgtLjk3LTQuMjQtMi45MS00LjUtNS4zLDEuNTksMCwyLjEyLC43MSwyLjc0LDEuNjgsLjk3LDEuMzIsMS41OSwxLjg1LDMsMi40NywyLjAzLC43OSw0LjMzLC41Myw1LjY1LS4yNiwxLjk0LTEuMjQsMS42OC0zLjI3LC4yNi00LjU5LTIuOTEtMi43NC02LjUzLTMuNTMtOC41Ni01LjU2LTEuNzctMS43Ny0yLjM4LTMuNzEtLjUzLTUuNzQsMS41OS0xLjY4LDUuODMtMi4yMSw4LjMtLjA5LDEuMDYsLjk3LDEuODUsMi4xMiwyLjEyLDMuMzVoMFptLTIxLjEtMTAuMDZjMC0xLjQxLDEuMDYtMi40NywyLjQ3LTIuNDcsMS4yNCwwLDIuMzgsMS4wNiwyLjM4LDIuNDcsMCwxLjMyLTEuMTUsMi40Ny0yLjM4LDIuNDctMS40MSwwLTIuNDctMS4xNS0yLjQ3LTIuNDdabTEuMTUsNS42NWgyLjQ3djE5LjE2aC0yLjQ3di0xOS4xNlptLTE5LjI1LDE5LjE2aDEuNzd2LTEzLjE1Yy44OCwyLjU2LDUuMjEsNS45Miw1LjIxLDUuOTIsMCwwLDMuMzUsMi44Myw0Ljk0LDYuNzFsMS4wNiwuNTN2LTE5LjE2aC0xLjc3djEzLjQyYy0uOTctMi41Ni00Ljc3LTUuNTYtNC43Ny01LjU2LTIuOTEtMi41Ni00Ljg2LTYuMDktNS4zLTcuNzdsLTEuMTUtLjM1djE5LjQyaDBaIi8+PC9zdmc+" alt="" />
                                </a>
                                <a href="./addproducts.html" className="tanishq-logo">
                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQuODMgNzQuNzkiPjxkZWZzPjxzdHlsZT4uYntmaWxsOiM4MzI3Mjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNMzguNzksNy41NWMtLjYyLTIuOTEsMS4zMi01LjU2LDQuMTUtNS41Nmg3Ljk1YzIuMTIsLjA5LDQuNzctMS41OSw0Ljc3LTEuNTlWMTMuNzNjMCwxMy41MS03LjQyLDE5LjI0LTEwLjg2LDE5Ljc3LS42MiwuMjctMS4wNiwuMDktLjI2LS41Myw0LjY4LTMsNy40Mi0xMC4xNSw3LjY4LTE2LjI0VjQuNTVjLS45NywuNjItMi44MiwuNzEtMi44MiwuNzFoLTYuOTdjLTEuODUsMC0yLjgyLC42Mi0zLjYyLDIuMjltMzUuNTgsMGMuNjItMi45MS0xLjI0LTUuNTYtNC4xNS01LjU2aC03Ljk1Yy0yLjAzLC4wOS00Ljc3LTEuNTktNC43Ny0xLjU5VjEzLjczYzAsMTMuNTEsNy40MiwxOS4yNCwxMC44NiwxOS43NywuNjIsLjI3LDEuMDYsLjA5LC4yNy0uNTMtNC42OC0zLTcuNDItMTAuMTUtNy42OC0xNi4yNFY0LjU1Yy45NywuNjIsMi44MiwuNzEsMi44MiwuNzFoNy4wNmMxLjg1LDAsMi44MywuNjIsMy41MywyLjI5aDBaTTIwLjI2LDYyLjk5Yy0uNzEtMS43Ny0uMTgtMy43MSwuMjYtNC40MWg4LjAzdjQuNDFoMi4wM3YtMTkuNTFzLS42Mi0uMDktMS4wNiwuNjJjLTMsNC43Ny01LjMsNi04LjY1LDkuMzYtMi44MywyLjgyLTQuOTQsNi0zLjg5LDkuNTNoMy4yN1ptLjg4LTUuNzRoNy40MnYtOC4zOWMtMS44NSwzLjQ0LTYuMjcsNS4zLTcuNDIsOC4zOVptODQuOTMtMTUuOGMtMi41NiwyLjAzLTQuNjgsMy44LTUuODMsNi40NC0xLjI0LDIuNjUtMS41OSw2LjQ0LDAsOS43MSwxLjc3LDMuNjIsMy44LDUuNTYsNi4xOCw3Ljk0LDEuNjgsMS44NSw0Ljg2LDUuNTYsMy44LDguODMsLjc5LDAsMS44NS0xLjk0LDIuMDMtMi42NSwuNDQtMi4yOSwuMTgtMy40NC0uNzktNS4xMi0uNjItMS4xNS0xLjk0LTIuMjktMi45MS0zLjQ0LDEuNDEtMS4xNSwyLjkxLTIuODMsNC4xNS00LjUsMS41OS0yLjIxLDIuNTYtNS45MSwuNTMtOS41My0xLjg1LTMuNDQtNy4wNi02LjYyLTcuMTUtNy42OGgwWm0xLjA2LDIwLjM5Yy0yLjAzLTEuNjgtMy4yNy0zLjA5LTQuNS01LjgzLTEuMjQtMi40Ny0xLjMyLTUuMzktLjc5LTcuNDIsLjYyLTIuMjEsMi4xMi0zLjgsMy41My00Ljk0LDEuNTksMS4xNSwzLjI3LDIuNTYsNC41LDQuNTksMi4wMywzLjQ0LDIuMDMsNS45MSwuNzEsOS4yNy0uNzksMS45NC0xLjY4LDMuMDktMy40NCw0LjMzaDBaTS41Nyw0NS4wN2MtLjM1LS43MSwuMTgtMi41NiwyLjMtMi4zOEgxMy4yOGMxLjMyLC4wOSwyLjEyLS44OCwzLjgtLjcxLTIuMzgsMS45NC0yLjY1LDIuOTEtMy4wOSw0Ljc3bC0xLjY4LDEzLjY4Yy0uNDQsNS41NiwxLjE1LDEwLjE1LDUuMywxMy45NS0yLjU2LC4zNS04LjEyLTMuNzEtOC4zLTExLjEyLS4xOC0zLjcxLC44OC0xNS41NCwuODgtMTUuNTQsLjI2LTEuOTQsMS41LTMuMzUsMS41LTMuMzVIMS44Yy0uNjIsLjA5LS45NywuMDktMS4yNCwuNzFILjU3Wm04MS44NCwxNy4zOWgyLjU2di01LjIxaDYuOTd2NS40N2gyLjY1di0xOC44OWgtMi42NXYxMS45MmgtNi45N3YtMTEuOTJoLTIuNTZ2MTguNjNoMFptLTcuMTUtMTQuMjFjLS42MiwuMTgtMS4yNC0uMDktMS44NS0uNjItLjg4LS43OS0xLjI0LTEuNTktMi4zOC0yLjI5LTEuMjQtLjYyLTMtLjcxLTQuMDYsLjA5LS45NywuNzEtLjk3LDIuMywuMDksMy4xOCwyLjAzLDEuNTksNC4yNCwyLjQ3LDYuOCwzLjgsNC42OCwyLjQ3LDUuNDcsNi44LDIuMjEsOS0yLjc0LDEuODUtNi4xOCwyLjAzLTkuMjcsLjg4LTIuMzgtLjk3LTQuMjQtMi45MS00LjUtNS4zLDEuNTksMCwyLjEyLC43MSwyLjc0LDEuNjgsLjk3LDEuMzIsMS41OSwxLjg1LDMsMi40NywyLjAzLC43OSw0LjMzLC41Myw1LjY1LS4yNiwxLjk0LTEuMjQsMS42OC0zLjI3LC4yNi00LjU5LTIuOTEtMi43NC02LjUzLTMuNTMtOC41Ni01LjU2LTEuNzctMS43Ny0yLjM4LTMuNzEtLjUzLTUuNzQsMS41OS0xLjY4LDUuODMtMi4yMSw4LjMtLjA5LDEuMDYsLjk3LDEuODUsMi4xMiwyLjEyLDMuMzVoMFptLTIxLjEtMTAuMDZjMC0xLjQxLDEuMDYtMi40NywyLjQ3LTIuNDcsMS4yNCwwLDIuMzgsMS4wNiwyLjM4LDIuNDcsMCwxLjMyLTEuMTUsMi40Ny0yLjM4LDIuNDctMS40MSwwLTIuNDctMS4xNS0yLjQ3LTIuNDdabTEuMTUsNS42NWgyLjQ3djE5LjE2aC0yLjQ3di0xOS4xNlptLTE5LjI1LDE5LjE2aDEuNzd2LTEzLjE1Yy44OCwyLjU2LDUuMjEsNS45Miw1LjIxLDUuOTIsMCwwLDMuMzUsMi44Myw0Ljk0LDYuNzFsMS4wNiwuNTN2LTE5LjE2aC0xLjc3djEzLjQyYy0uOTctMi41Ni00Ljc3LTUuNTYtNC43Ny01LjU2LTIuOTEtMi41Ni00Ljg2LTYuMDktNS4zLTcuNzdsLTEuMTUtLjM1djE5LjQyaDBaIi8+PC9zdmc+" alt="" />
                                </a>

                            </div>

                            <div className="search-product">
                                <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                                <div className="icon">
                                    <Icon.Camera />
                                </div>
                                <div className="icon">
                                    <Icon.Mic />
                                </div>
                                <div className="icon">
                                    <Icon.Search />
                                </div>
                            </div>

                            <div className="top-right-menu-wrapper">
                                <div className="top-right-menu">
                                    <div className="single-menu">
                                        <Icon.Shop />
                                    </div>
                                    <div className="top-right-menu-name">stores</div>
                                </div>
                                <div className="top-right-menu">
                                    <div className="single-menu">
                                        <Icon.Person />
                                    </div>
                                    <div className="top-right-menu-name" id="switch">account</div>
                                </div>
                                <div className="top-right-menu">
                                    <div className="single-menu">
                                        <Icon.Heart />
                                    </div>
                                    <div className="top-right-menu-name">wishlist</div>
                                </div>
                                <div className="top-right-menu">
                                    <div className="single-menu">
                                        <Icon.Cart />
                                    </div>
                                    <div className="top-right-menu-name">cart</div>
                                </div>

                                <div id="logout">

                                </div>
                            </div>
                        </div>

                        {/* <!-- hide----search------ navbar------------- --> */}
                        <div className="hide-search-navbar">
                            <div className="search-product">
                                <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                                <div className="icon">
                                    <Icon.Camera />
                                </div>
                                <div className="icon">
                                    <Icon.Mic />
                                </div>
                                <div className="icon">
                                    <Icon.Search />
                                </div>
                            </div>
                            <div className="bottom-navbarmenu">
                                <div className="buttom-navbar-container">
                                    <ul className="categories">
                                        <li>
                                            <a href="./index.html">Home </a>
                                        </li>
                                        <li>
                                            <a href="./register.html">Sign up </a>
                                        </li>
                                        <li>
                                            <a href="./login.html">Lon in </a>
                                        </li>
                                        <li>
                                            <a href="./Cart-3.html">cart </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-navbar">
                        <div className="buttom-navbar-container">
                            <ul className="categories">
                                <li>
                                    <a href="">All Jewellery </a>
                                </li>
                                <li>
                                    <a href="">Gold </a>
                                </li>
                                <li>
                                    <a href="">diamond </a>
                                </li>
                                <li>
                                    <a href="">earrings </a>
                                </li>
                                <li>
                                    <a href="">rings </a>
                                </li>
                                <li>
                                    <a href="">exclusive coins </a>
                                </li>
                                <li>
                                    <a href="">mia </a>
                                </li>
                                <li>
                                    <a href="">collections </a>
                                </li>
                                <li>
                                    <a href="">rivaah </a>
                                </li>
                                <li>
                                    <a href="">Golden Harvest </a>
                                </li>
                                <li>
                                    <a href="">corporate gifting </a>
                                </li>
                                <li>
                                    <a href="">more </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </header>

                {/* <!-- slider section----------------- --> */}
                <div className="image-slider">
                    <div id="slider">
                        <input type="radio" name="slider" id="slide1" checked />
                        <input type="radio" name="slider" id="slide2" />
                        <input type="radio" name="slider" id="slide3" />
                        <input type="radio" name="slider" id="slide4" />
                        <div id="slides">
                            <div id="overflow">
                                <div className="inner">
                                    <div className="slide slide_1">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw03f65359/homepage/HeroBanner/dordesktopnew.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_2">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe16745e5/homepage/HeroBanner/tom-dbanner.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_3">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdecbdba5/homepage/HeroBanner/desktop-ion.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_4">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf81546aa/homepage/HeroBanner/fod-desktop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  <div id="controls">
                   <label for="slide1"></label>
                   <label for="slide2"></label>
                   <label for="slide3"></label>
                   <label for="slide4"></label>
                </div>  */}
                        <div id="bullets">
                            <label for="slide1"></label>
                            <label for="slide2"></label>
                            <label for="slide3"></label>
                            <label for="slide4"></label>
                        </div>
                    </div>

                </div>

                {/* <!-- -------------slider ends------------------> */}

                <div className="second-section-container">

                    {/* shop by category */}

                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Shop Jewellery By Category
                        </h1>
                        <p className="section-para-txt">
                            Browse through your favourite categories. We've got them all!
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="shop-jwell-content">
                        <div className="jwell-left-img-content-info">
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw489aca65/homepage/shopByCategory/GoldCoin.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">gold coins</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>

                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8ea34f31/homepage/shopByCategory/earrings-new.jpg" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">earrings</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw61d76aef/homepage/shopByCategory/Pendant.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">pendants</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="./multiple-products-page-1.html" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw215de9c7/homepage/shopByCategory/CoupleRing.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">Engagement rings</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwccb8edee/homepage/shopByCategory/Chain.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">chains</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw94a5b614/homepage/shopByCategory/Bangle.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">bangles</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="jwell-right-img-content-info">
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw11da1930/homepage/shopByCategory/Ring.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">finger rings</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw311c9ba4/homepage/shopByCategory/mangalsutras-new.jpg" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">mangalsutras</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwefbcce7b/homepage/shopByCategory/Neckwear.png" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">neckwear</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5b3c542d/homepage/shopByCategory/bracelets-new.jpg" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">bracelets</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6e9345c0/homepage/shopByCategory/nosepins-new.jpg" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">nose pins</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="product-link">
                                <div className="card-jewll-category">
                                    <div className="product-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwacf40d1b/homepage/shopByCategory/pendant-set-new.jpg" alt="" />
                                    </div>
                                    <div className="card-product-info">
                                        <h5 className="jwell-name">pendant sets</h5>
                                        <div className="explore-btn-and-arrow-wrap">
                                            <span className="e-expolre-txt">Explore</span>
                                            <span className="e-card-next-icon"><Icon.ChevronRight/></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                {/* <!-- section-3 shop by collection --> */}

                <div className="shop-collection-container">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Shop by Collection
                        </h1>
                        <p className="section-para-txt">
                            Whatever the occasion, we've got a beautiful piece of jewellery for you.
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="collection-content-wrapper">
                        <a href="" className="collection-product-desc">
                            <div className="collection-product-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b1c328d/homepage/ShopByCollection/dor-homepage-new.jpg" alt="" />
                            </div>
                            <div className="collection-product-name-info">
                                <div className="c-product-name">
                                    dor
                                </div>
                                <div className="c-explore-now">
                                    <p className="c-epx-now">Explore now</p>
                                    <span><Icon.ChevronRight/></span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="collection-product-desc">
                            <div className="collection-product-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b9560ad/homepage/ShopByCollection/exclusive-coins-homepage.jpg" alt="" />
                            </div>
                            <div className="collection-product-name-info">
                                <div className="c-product-name">
                                    exclusive coins
                                </div>
                                <div className="c-explore-now">
                                    <p>Explore now <span><Icon.ChevronRight/></span></p>
                                </div>
                            </div>
                        </a>
                        <a href="" className="collection-product-desc">
                            <div className="collection-product-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw38c90fd5/homepage/ShopByCollection/stunning-ear-homepage.jpg" alt="" />
                            </div>
                            <div className="collection-product-name-info">
                                <div className="c-product-name">
                                    stunning every ear
                                </div>
                                <div className="c-explore-now">
                                    <p>Explore now <span><Icon.ChevronRight/></span></p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

                {/* <!-- section-4---------------- --> */}

                <div className="top-seller-content">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Top Sellers
                        </h1>
                        <p className="section-para-txt">
                            Check out the products that our customers love the most
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="top-seller-product-content">
                        <div className="top-sell-product-card">
                            <div className="t-s-product-img">
                                <div className="topSellerRgt">Top Seller</div>
                                <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511072CSGAA00_1.jpg?impolicy=pqmed&imwidth=320"
                                    alt="" />
                            </div>
                            <div className="t-s-p-info">
                                <div className="t-s-p-name">
                                    Simple Gold Chain for Kids
                                </div>
                                <div className="t-s-p-price">
                                    ₹ 17909
                                </div>
                                <div className="e-explore-btn">
                                    Explore
                                </div>
                            </div>
                        </div>
                        <div className="top-sell-product-card">
                            <div className="t-s-product-img">
                                <div className="topSellerRgt">Top Seller</div>
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/501002FIOAA09_1.jpg" alt="" />
                            </div>
                            <div className="t-s-p-info">
                                <div className="t-s-p-name">
                                Delicate Dainty Diamond Finger Ring
                                </div>
                                <div className="t-s-p-price">
                                    ₹ 5659
                                </div>
                                <div className="e-explore-btn">
                                    Explore
                                </div>
                            </div>
                        </div>
                        <div className="top-sell-product-card">
                            <div className="t-s-product-img">
                                <div className="topSellerRgt">Top Seller</div>
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51D3B11MAABA00_1.jpg" alt="" />
                            </div>
                            <div className="t-s-p-info">
                                <div className="t-s-p-name">
                                Leafy Pendant and Earrings Set
                                </div>
                                <div className="t-s-p-price">
                                    ₹ 18033
                                </div>
                                <div className="e-explore-btn">
                                    Explore
                                </div>
                            </div>
                        </div>
                        <div className="top-sell-product-card">
                            <div className="t-s-product-img">
                                <div className="topSellerRgt">Top Seller</div>
                                <img src="https://staticimg.titan.co.in/Mia/Catalog/552820DLBAAE37_1.jpg?impolicy=pqmed&imwidth=320"
                                    alt="" />
                            </div>
                            <div className="t-s-p-info">
                                <div className="t-s-p-name">
                                    14KT Yellow Gold Cupid Drop Earrings
                                </div>
                                <div className="t-s-p-price">
                                    ₹ 8710
                                </div>
                                <div className="e-explore-btn">
                                    Explore
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- section-5-------------------- --> */}

                <div className="news-for-you-content-wrappper">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            New For You!
                        </h1>
                        <p className="section-para-txt">
                            Our latest releases, just for you!
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="news-for-u-info">
                        <div className="news-for-y-img">
                            <div className="news-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw113e5f6c/homepage/NewForYou/sparkling-avenues.jpg" alt="" />
                            </div>
                            <button className="news-explore-button">Explore more</button>
                        </div>
                        <div className="news-for-y-img">
                            <div className="news-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6592f9dc/homepage/NewForYou/pretty-in-pink.jpg" alt="" />
                            </div>
                            <button className="news-explore-button">Explore more</button>
                        </div>
                        <div className="news-for-y-img">
                            <div className="news-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw34bef508/homepage/NewForYou/zodiac-coins.jpg" alt="" />
                            </div>
                            <button className="news-explore-button">Explore more</button>
                        </div>
                    </div>
                </div>

                {/* <!-- section-6-------------- --> */}

                <div className="shop-by-gender-content-wrapper">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Shop by Gender
                        </h1>
                        <p className="section-para-txt">
                            Explore our latest designs curated just for you!
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="shop-by-gender-info">
                        <a href="" className="collection-product-content-image">
                            <div className="collection-product-img">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg" alt="" />
                            </div>
                            <div className="collection-product-name-info">
                                <div className="c-product-name">
                                    women
                                </div>
                                <div className="c-explore-now">
                                    <p>Explore now <span><Icon.ChevronRight/></span></p>
                                </div>
                            </div>
                        </a>

                        <div className="shop-by-gender-img-wrapper">
                            <a href="" className="collection-product-content-image">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        men
                                    </div>
                                    <div className="c-explore-now">
                                        <p>Explore now <span><Icon.ChevronRight/></span></p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="collection-product-content-image">
                                <div className="collection-product-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24db1907/homepage/ShopByGender/kid.jpg" alt="" />
                                </div>
                                <div className="collection-product-name-info">
                                    <div className="c-product-name">
                                        kids
                                    </div>
                                    <div className="c-explore-now">
                                        <p>Explore now <span><Icon.ChevronRight/></span></p>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>

                {/* <!-- section-7------------------------------- --> */}


                <div className="shine-with-nature">
                    <div className="shine-nature-img">
                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb321e397/homepage/posters/giftingbannerdesktop.jpg" alt="" />
                    </div>
                    <button className="news-explore-button">Explore more</button>

                </div>

                {/* <!-- section-8----------------------------------- -->/ */}

                <div className="video-review">
                    <iframe width="100%" height="350"
                        src="https://www.youtube.com/embed/omr0ZiQhUAo?autoplay=1&mute=1&controls=0&rel=0&showinfo=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <button className="news-explore-button">Explore more</button>

                </div>

                {/* <!-- section-9------------------------------------ -->/ */}
                <div className="rivaah-content">
                    <div className="rivaah-brides">
                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw93b25375/homepage/posters/Rivaah-Bride.jpg" alt="" />
                    </div>
                    <div className="rivaah-info-img">
                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc13fe09/homepage/posters/rivah_desktop.jpg" alt="" />
                        <button className="rivaah-explore-button">Explore more</button>
                        <button className="rivaah-callback-button">Arrange a Callback</button>

                    </div>
                </div>

                {/* <!-- section-10------------- -->/ */}

                <div className="jwell-guides-content">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Jewellery Guides
                        </h1>
                        <p className="section-para-txt">
                            Check out our ready made guides to make your buying easier.
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="jwell-guidence">
                        <div className="jwell-left-side">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw82419527/images/home/findringsize.svg" alt="" />
                            <h1 className="guidance-txt">Find Your Ring Size</h1>
                            <div className="j-g-explore-now-btn">
                                Explore Now <span><i className="fa-solid fa-arrow-right-long"></i></span>
                            </div>
                        </div>
                        <div className="jwell-right-side">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw40c95bdc/images/home/jewllerycare.svg" alt="" />
                            <h1 className="guidance-txt">The Jewellery Care Guide</h1>
                            <div className="j-g-explore-now-btn">
                                Explore Now <span className="jwell-arrow"><i className="fa-solid fa-arrow-right-long "></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- section-11------------------- --> */}

                <div className="connect-with-us-content">
                    <div className="section-heading">
                        <h1 className="section-heading-txt">
                            Connect With Us
                        </h1>
                        <p className="section-para-txt">
                            We are always available to guide you at your convenience
                        </p>
                        <div className="section-divider-line">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" />
                        </div>
                    </div>

                    <div className="connect-by-opt">
                        <div className="connect-opt">
                            <div className="connect-info">
                                <p>Connect On</p>
                                <h1>WhatsApp</h1>
                                <div className="wh-connect-btn">
                                    Connect
                                </div>
                            </div>
                            <div className="connect-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9fa2f775/images/home/whatsapp-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="connect-opt">
                            <div className="connect-info">
                                <p>Book An</p>
                                <h1>Appointment</h1>
                                <div className="wh-connect-btn">
                                    Book
                                </div>
                            </div>
                            <div className="connect-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac5fb555/images/home/marker-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="connect-opt">
                            <div className="connect-info">
                                <p>Schedule a</p>
                                <h1>Video Call</h1>
                                <div className="wh-connect-btn">
                                    Schedule
                                </div>
                            </div>
                            <div className="connect-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw153e7692/images/home/video-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- footer---------------------------------------> */}

                <div className="footer">
                    <div className="footer-container">
                        <div className="footer-links-heading">
                            <h3 className="footer-link-txt">useful links</h3>
                            <a href="" className="footer-link">Delivery Information </a>
                            <a href="" className="footer-link">International Shipping </a>
                            <a href="" className="footer-link">Payment Options </a>
                            <a href="" className="footer-link">Track Your Order </a>
                            <a href="" className="footer-link">Returns </a>
                            <a href="" className="footer-link">Find a Store </a>
                        </div>
                        <div className="footer-links-heading">
                            <h3 className="footer-link-txt">information</h3>
                            <a href="" className="footer-link">career </a>
                            <a href="" className="footer-link">blog </a>
                            <a href="" className="footer-link">offers & contest details</a>
                            <a href="" className="footer-link">help & FAQS </a>
                            <a href="" className="footer-link">about tanishq </a>
                        </div>
                        <div className="footer-links-heading">
                            <h3 className="footer-link-txt">contact us</h3>
                            <a href="" className="footer-link"><span><Icon.ChatLeft/></span><span>write to us</span>
                            </a>
                            <a href="" className="footer-link"><span><Icon.Telephone/></span>1800-266-0123 </a>
                            <a href="" className="footer-link"><span><Icon.Envelope/></span>chat with us </a>
                        </div>
                        <div className="collapse-link-group">
                            <div className="link-closable">
                                <h3>Useful Links</h3>
                                <p>+</p>
                            </div>
                            <div className="link-closable">
                                <h3>Information</h3>
                                <p>+</p>
                            </div>
                            <div className="link-closable">
                                <h3>Contact Us</h3>
                                <p>+</p>
                            </div>
                        </div>
                        <div className="download-app">
                            <h3>Download the Tanishq App Now</h3>
                            <div className="app-download-opt">
                                <div className="appstore-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png" alt="" />
                                </div>
                                <div className="playstore-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa17f8ad4/images/footer/Component%20145%20%E2%80%93%201@2x.png" alt="" />
                                </div>
                            </div>
                            <div className="follow-us-wrapper">
                                <div className="follow-us">
                                    Follow Us On
                                </div>
                                <div className="social-media-icons">
                                    <div className="s-m-icon">
                                    <Icon.Facebook size={20} />
                                    </div>
                                    <div className="s-m-icon">
                                    <Icon.Twitter size={20} />
                                    </div>
                                    <div className="s-m-icon">
                                    <Icon.Instagram size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="hr-line" />

                    <div className="footer-container-2">
                        <div className="footer-last-div">
                            <div className="footer-last-left-div">
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/visa.svg" alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/master.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/paypal.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/maestro.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/rupay.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/icici.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/axis.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/diners.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/amex.svg " alt="" />
                                </div>
                            </div>
                            <div className="footer-last-right-div">
                                <p>© 2023 Titan Company Limited. All Rights Reserved.</p>
                                <p>Terms & conditions | privacy Policy</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;