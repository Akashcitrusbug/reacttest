import React from 'react';
import Logo from '../../assets/images/logo.png'
import '../../assets/css/footer.css'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer-div">

          <div className="container container-1200">
            <div className="row">
              <div className="col-lg-12 col-md-12">

                <div className="footer-content-row">
                  <div className="row">
                    
                    <div className="col-lg-4 col-md-3">

                      <div className="content-footer-div">
                        <div className="logo-footer">
                          <a className="logo_link clearfix" href="index.html">
                            <img src={Logo} className="img-fluid logo_img main-logo" alt="logo" />
                            <h1 className="text-logo"> <span className="text-logo-span1">Creator</span> <span className="text-logo-span2">classes</span></h1>
                          </a>
                        </div>
                        <div className="social-icon-div-root">
                          <ul className="footer-social-ul">
                            <li> 
                              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a> 
                            </li>
                            <li>
                              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                      <div className="footer-nav-list-inner">
                        <div className="footer-title-div">
                          <h3>Cleator Classes </h3>
                        </div>
                        <ul className="footer-list-ul">
                          <li><a href="#" className="link">Why Creator classes</a></li>
                          <li><a href="#" className="link">Enterprise</a></li>
                          <li><a href="#" className="link">Customer Stories</a></li>
                          <li><a href="#" className="link">Pricing</a></li>
                          <li><a href="#" className="link">Security</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-2 col-6">
                      <div className="footer-nav-list-inner">
                        <div className="footer-title-div">
                          <h3>Quick Links </h3>
                        </div>
                        <ul className="footer-list-ul">
                          <li><a href="#" className="link">FAQs</a></li>
                          <li><a href="#" className="link">Login</a></li>
                          <li><a href="#" className="link">Privacy Policy</a></li>
                          <li><a href="#" className="link">Terms of use</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                      <div className="footer-nav-list-inner">
                        <div className="footer-title-div">
                          <h3>Subscribe </h3>
                        </div>
                        
                        <div className="mail-bx-div">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email address" />
                            <div className="abs-bn-right-send"> <button className="btn btn-arrow-send"> <span className="material-icons"> keyboard_arrow_right </span></button></div>
                          </div>
                        </div>

                        <div className="es-box-div">
                          <div className="e-div">
                            <a className="link link-icon-a" href="mailto:creatorclasses@gmail.com">
                              <span className="icon-span"><span className="material-icons"> mail_outline </span></span> <span className="text">creatorclasses@gmail.com</span>
                            </a>
                          </div>
                          <div className="e-div">
                            <a className="link big-text-link" href="tel:54544566560"> <span className="text">+ 54 544 566 560</span> </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>      
                </div>

                <div className="footer-copyright-div">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="footer-copyright-box-root">
                        <p> <a href="#" className="link">CreatorClases</a> &copy; 2021</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer