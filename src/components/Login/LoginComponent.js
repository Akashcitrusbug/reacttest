import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/fonts/gilroy/gilroy-style.css';
import '../../assets/fonts/moderat/moderat-style.css';
import '../../assets/css/all.min.css';
import '../../assets/css/feather.min.css';
import '../../assets/css/custom-forms-style.css';
import '../../assets/css/auth-style.css';
import '../../assets/css/style.css';

import LeftSideImageComponent from './LeftSideImageComponent';
import RightSideLoginComponent from './RightSideLoginComponent';


const LoginComponent = () => {
  return (
    <div id="wrapper" className="wrapper login-wrapper">
        <div className="main-middle-area pt-custom-0">
            <section className="auth-section" id="login-section">
                <div className="auth-div">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 p-0">
                                <div className="auth-root-div">
                                    <LeftSideImageComponent />
                                    <RightSideLoginComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default LoginComponent;
