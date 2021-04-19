import React, {useState, useEffect} from 'react';
import '../../assets/css/header.css';
import Logo from '../../assets/images/white-logo-1.png';
import { Link } from "react-router-dom";
const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  const element = document.querySelector(".header-div");
  const handlePageScroll = () => {
    if (element && offset >= 190) {
          element.classList.add("header-bgcolor")
          element.classList.add("slideInDown")
          element.classList.add("animated");
    }
    if (element && offset < 50) {
      element.classList.remove("header-bgcolor")
      element.classList.remove("slideInDown")
      element.classList.remove("animated");
    }
  };
  return (
    <>
    <header>
    <div className="header-div no-collapse-header clearfix" onScroll={handlePageScroll()}>
      <div className="inner-top-header-div clearfix">
        <div className="container container-1200">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="header-container">

                      <div className="logo-div">
                        <a className="logo_link clearfix" href="index.html">
                          <img src={Logo} className="img-fluid logo_img main-logo" alt="logo" />
                          <h1 className="text-logo"> <span className="text-logo-span1">Creator</span> <span className="text-logo-span2">classes</span></h1>
                        </a>
                      </div>

                      <nav className="nav-center-div">
                        <div className="top-nav1">
                          <div className="cd-shadow-layer"></div>
                          <div className="nav-m-bar">
                            <a onclick="openNav()" className="opennav" data-placement="bottom" title="" data-original-title="Menu">
                              <i className="menu-bars menu-icon"></i>
                            </a>
                          </div>
                          <div className="nav-div clearfix" id="mySidenav" >
                            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                            <div className="right-side">
                              <ul className="nav ullist-inline" id="nav-res" >
                                <li><Link to='/login'className="nav-link login-in-btn">Login</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>

                    </div>
                
                </div>
            </div>
        </div>
      </div>	
    </div>
  </header>
  </>
  )
}

export default Header