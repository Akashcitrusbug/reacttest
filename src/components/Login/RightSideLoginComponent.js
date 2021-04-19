import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo.png';

const RightSideLoginComponent = () => {
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
    return (
        <div className="auth-right-side">
            <div className="auth-content-div">

            <div className="auth-top-area-div">

                <div className="auth-logo-div">
                <a href="index.html" className="img-logo-link">
                    <img src={logo} className="img-fluid img-responsive" alt="logo" />
                </a>
                </div>

                <div className="heading-div">
                <h2>Log in to Creator Classes</h2>
                </div>

                <div className="form-auth-root">
                <div className="form-root-main">
                    <form className="form-root">

                    <div className="row mlr-8">

                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                        <div className="social-button-div">
                            <div className="sb-div-row">
                            <div className="sb-div sb-full-div">
                                <a href="#" className="btn btn-blck-sb btn-blck-sb-full"> <i className="fab fa-google icon-i"></i> <span className="text-div"> Log in with google </span> </a>
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
                        <div className="or-separator-div">
                            <p>or</p>
                        </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                            <div className="form-group-custom form-group-icon">
                                <span className="custom-icon"><span
                                    className="material-icons user-rounded-icon">account_circle</span></span>
                                <input type="text" className="form-control" placeholder="Username or email" value={email} 
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        }} />
                                <div className="form-group-control">
                                {Object.keys(emailErr).map((key) => {
                                                return (
                                                <span style={{ color: "red" }}>{emailErr[key]}</span>
                                                );
                                            })}
                                </div>
                            </div>
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
                                  }} />
                            </div>
                            <span className="icon-group">
                            <button type="button" id="show_password01" name="show_password"
                                className="pass-hide password-view-click">
                                <span className="pass-custom-icon material-icons"> visibility </span>
                            </button>
                            </span>
                        </div>
                        {Object.keys(passwordErr).map((key) => {
                                                return (
                                                <span style={{ color: "red" }}>{passwordErr[key]}</span>
                                                );
                                            })}
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="remember-me-su" name="example1" />
                            <label className="custom-control-label" for="remember-me-su">Remember me</label>
                        </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                        <div className="general-form-btn">
                            <button type="button" className="btn btn-common-primary btn-login" onClick={onSubmit}>Log in</button>
                        </div>
                        </div>

                    </div>

                    </form>
                </div>
                </div>
                
            </div>

            <div className="auth-bottom-area-div">
                <div className="row mlr-8">
                <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                    <div className="bottom-row">
                    <div className="link-box text-center-reg-side">
                        <p>Don’t have an account? <a href="signup.html" className="btn btn-link btn-red-link">Signup</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default RightSideLoginComponent;