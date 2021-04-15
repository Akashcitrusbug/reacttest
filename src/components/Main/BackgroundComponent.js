import React from 'react';
import BannerImage from '../../assets/images/latest/header-graphic.png';
const BackgroundComponent = () => {
  return (
    <div className="banner-div">
      <div className="content-banner-root">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="content-banner">
                <div className="text-content">
                  <h1>
                    <span className="block">Build Your Future Right Here</span>
                  </h1>

                  <p>
                    Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a
                    pellentesque nec.
                  </p>
                  <div className="button-group-div">
                    <a href="#" className="btn btn-primary-all">
                      <span className="text">Get Started Now</span>
                      <span className="span-rounded">
                        <span className="material-icons"> keyboard_arrow_right </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner-right-image-div m-none">
                <img src={BannerImage} className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-arrow-root">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="center-bottom-arrow-div">
                <a href="#our-classes-section" className="rounded-arrow-icon-btn">
                  <span className="material-icons"> keyboard_arrow_down </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
