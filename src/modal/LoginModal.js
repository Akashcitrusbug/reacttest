import React, {useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap';

function LoginModal(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    
    const onSubmit = (e) => {
        // e.preventDefault();

        const isValid = formValidation();
        if (isValid) {
            setEmail("");
            setPassword("");
            console.log('Login modal form is valid')
        }
        else{
            console.log("Form is not valid")
        }
    }

    const formValidation = () => {
        const emailErr = {};
        const passwordErr = {};
        let isValid = true;
    
        if (email.trim().length === 0) {
          emailErr.emailRequired = "Email is required!";
          isValid = false;
        }
    
        if (!email.includes("@")) {
          emailErr.emailInvalid = "Email address is not valid!";
          isValid = false;
        }
    
        if (password.trim().length < 6) {
          passwordErr.passwordShort = "Password is too short!";
          isValid = false;
        }
    
        if (password.trim().length > 12) {
          passwordErr.passwordLong = "Password is too long!";
          isValid = false;
        }
    
        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        return isValid;
      };

    return(
        <>
        <Modal id="login-to-book-modal"
        className="modal right right-slider-modal fade"
        role="dialog"
        show={props.show}
        onHide={props.onHide}>
                        <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"> <i
                        className="fe fe-x close-icon-x"></i> </span></button>
                </div>

                <div className="modal-body">

                <div className="common-modal-body login-to-book-body">
                    <div className="common-header-div">
                    <div className="title-heading-div">
                        <h2 className="ltb-h2">Login to Book</h2>
                        <h2 className="ltp-h2 hide-h2">Sign up to Book</h2>
                    </div>
                    </div>
                    <div className="common-body-div">

                    <div className="common-body-inner-div">

                        <div className="tabs-root-custom">

                        <div className="tabs-header">
                            <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active show" data-toggle="tab" href="#login-tab-01">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#signup-tab-02">SignUp</a>
                            </li>
                            </ul>
                        </div>

                        <div className="tabs-body">
                            <div className="tab-content">

                            <div id="login-tab-01" className="tab-pane fade active show">

                                <div className="tab-pane-inner">

                                <div className="form-ls-root">
                                    <div className="form-root-main">
                                    <form className="form-root">

                                        <div className="row mlr-8">

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span
                                                className="material-icons user-rounded-icon">account_circle</span></span>
                                            <div className="form-group-control">
                                                <input type="text" className="form-control" placeholder="Username or email" value={email} 
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    }} 
                                                />
                                            </div>
                                            </div>
                                            {Object.keys(emailErr).map((key) => {
                                                return (
                                                <span style={{ color: "red" }}>{emailErr[key]}</span>
                                                );
                                            })}
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span
                                                className="material-icons pass-key-icon">vpn_key</span></span>
                                            <div className="form-group-control">
                                                <input type="password" id="password01" className="form-control"
                                                placeholder="Password" value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                  }}
                                                />
                                            </div>
                                            <span className="icon-group">
                                                <button type="button" id="show_password01" name="show_password"
                                                className="pass-hide password-view-click">
                                                <span className="pass-custom-icon material-icons"> visibility </span>
                                                </button>
                                            </span>
                                            {Object.keys(passwordErr).map((key) => {
                                                return (
                                                <span style={{ color: "red" }}>{passwordErr[key]}</span>
                                                );
                                            })}
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="general-form-btn">
                                            <a href="#" className="btn-common-linked" onClick={onSubmit}> <button type="button" className="btn btn-common-primary btn-login">Login</button> </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="bottom-row">
                                            <div className="link-box text-center-reg-side">
                                                <p>Don’t have an account? <a className="btn btn-link btn-red-link" id="register-data-tab-link" href="#signup-tab-02">Register now</a></p>
                                            </div>
                                            <div className="link-box text-right-side">
                                                <a href="#" className="btn btn-link btn-forgot">Forgot Password?</a>
                                            </div>
                                            </div>

                                            <div className="next-box-row">
                                            <div className="link-box text-center-side">
                                                <a href="#" className="btn btn-link btn-next-link">Next</a>
                                            </div>
                                            </div>
                                        </div>


                                        </div>

                                    </form>
                                    </div>
                                </div>

                                </div>

                            </div>

                            <div id="signup-tab-02" className="tab-pane fade">

                                <div className="tab-pane-inner">

                                <div className="form-ls-root">
                                    <div className="form-root-main">
                                    <form className="form-root">

                                        <div className="row mlr-8">

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="social-button-div">
                                            <div className="sb-div-row">
                                                <div className="sb-div sb-full-div">
                                                <a href="#" className="btn btn-blck-sb btn-blck-sb-full"> <i className="fab fa-google icon-i"></i> <span className="text-div"> Sign up with google </span> </a>
                                                </div>
                                                <div className="sb-div">
                                                <a href="#" className="btn btn-blck-sb"> <i className="fab fa-twitter icon-i"></i> </a>
                                                </div>
                                                <div className="sb-div">
                                                <a href="#" className="btn btn-blck-sb"> <i className="fab fa-facebook-f icon-i"></i> </a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span
                                                className="material-icons user-rounded-icon">account_circle</span></span>
                                            <div className="form-group-control">
                                                <input type="text" className="form-control" placeholder="Username or email" />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span className="material-icons user-rounded-icon">mail</span></span>
                                            <div className="form-group-control">
                                                <input type="email" className="form-control" placeholder="e-mail" />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span
                                                className="material-icons pass-key-icon">vpn_key</span></span>
                                            <div className="form-group-control">
                                                <input type="password" id="password02" className="form-control"
                                                placeholder="Password" />
                                            </div>
                                            <span className="icon-group">
                                                <button type="button" id="show_password02" name="show_password"
                                                className="pass-hide password-view-click">
                                                <span className="pass-custom-icon material-icons"> visibility </span>
                                                </button>
                                            </span>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="form-group-custom form-group-icon">
                                            <span className="custom-icon"><span
                                                className="material-icons pass-key-icon">vpn_key</span></span>
                                            <div className="form-group-control">
                                                <input type="password" id="password03" className="form-control"
                                                placeholder="Confirm Password" />
                                            </div>
                                            <span className="icon-group">
                                                <button type="button" id="show_password03" name="show_password"
                                                className="pass-hide password-view-click">
                                                <span className="pass-custom-icon material-icons"> visibility </span>
                                                </button>
                                            </span>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="general-form-btn">
                                            <a href="#" className="btn-common-linked" data-toggle="modal" data-target="#booking-modal" data-dismiss="modal"> <button type="button" className="btn btn-common-primary btn-signup">SignUp</button> </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                            <div className="bottom-row">
                                            <div className="link-box text-center-reg-side">
                                                <p>Have an account? <a href="#login-tab-01" id="login-data-tab-link" className="btn btn-link btn-red-link">Login</a></p>
                                            </div>
                                            </div>

                                            <div className="next-box-row">
                                            <div className="link-box text-center-side">
                                                <a href="#" className="btn btn-link btn-next-link disable">Next</a>
                                            </div>
                                            </div>
                                        </div>

                                        </div>

                                    </form>
                                    </div>
                                </div>

                                </div>

                            </div>

                            </div>
                        </div>

                        </div>

                    </div>

                    </div>
                </div>

                </div>

            </div>
            </div>
        

        </Modal>

        </>
    )

}

export default LoginModal