import React from 'react';
import img from '../../assets/images/background/banner-auth-logo.png';

const LeftSideImageComponent = () => {
    return (
        <div className="auth-left-side">
            <div className="auth-banner-div">

            <div className="img-thumb">
                <img src={img} className="img-fluid" alt="img" />
            </div>

            </div>
        </div>
    )
}

export default LeftSideImageComponent;