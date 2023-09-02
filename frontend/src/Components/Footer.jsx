import * as Icon from 'react-bootstrap-icons';

const Footer =()=>{
    return(
        <>
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
                            <a href="" className="footer-link"><span><Icon.ChatLeft /></span><span>write to us</span>
                            </a>
                            <a href="" className="footer-link"><span><Icon.Telephone /></span>1800-266-0123 </a>
                            <a href="" className="footer-link"><span><Icon.Envelope /></span>chat with us </a>
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
        </>
    )
}

export default Footer;