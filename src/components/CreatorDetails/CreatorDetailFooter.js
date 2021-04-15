import React from 'react';
import img from '../../assets/images/white-icon-logo.svg';

const CreatorDetailFooter = () => {
    return (
        <footer>
            <div className="footer-div footer-bg2">
            <div className="container container-1000">
                <div className="row">
                <div className="col-lg-12 col-md-12">

                    <div className="footer-logo-row">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <div className="footer-logo-box-root">
                            <div className="footer-logo-thumb">
                            <a href="#" className="logo-link">
                                <img src={img} className="img-fluid logo_img footer-logo" alt="logo" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="footer-content-row">
                    <div className="row">
                        
                        <div className="col-lg-5 col-md-5">
                        <div className="about-desc-footer-div">
                            <h4>About us</h4>
                            <p>Creator Classes is a collection of online tutorials from a team of top creators in the creative social industry. We provide you with unprecedented resources and invaluable tools straight from your favourite creators all in one place. Our library of classes covers photography, videography, editing, social insights, business know-how and more. Start your creative career.</p>
                        </div>
                        </div>

                        <div className="col-lg-3 col-md-3">
                        <div className="footer-nav-list-inner">
                            <ul className="footer-list-ul">
                            <li><a href="#" className="link">FAQs</a></li>
                            <li><a href="login.html" className="link">Login</a></li>
                            <li><a href="#" className="link">Privacy Policy</a></li>
                            <li><a href="#" className="link">Terms of use</a></li>
                            </ul>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                        <div className="es-box-div">
                            <div className="e-div">
                            <a className="link" href="mailto:support@creatorclasses.co"> <i className="bg-custom-icon mail-icon"></i> <span className="text">support@creatorclasses.co</span> </a>
                            </div>

                            <div className="social-icon-div-root">
                            <ul className="footer-social-ul">
                                <li>
                                <a href="#" className="social-link linkedin-link"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li> 
                                <a href="#" className="social-link facebook-link"><i className="fab fa-facebook-f"></i></a> 
                                </li>
                                <li>
                                <a href="#" className="social-link twitter-link"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                <a href="#" className="social-link google-plus-link"><i className="fab fa-google-plus-g"></i></a>
                                </li>
                            </ul>
                            </div>
                            
                        </div>
                        </div>

                    </div>      
                    </div>

                    <div className="footer-copyright-div">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <div className="footer-copyright-box-root">
                            <p> <a href="#" className="link">CreatorClases</a> &copy; 2020</p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default CreatorDetailFooter;