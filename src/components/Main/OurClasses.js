import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../assets/images/live-card/img.png';
import img2 from '../../assets/images/live-card/img-1.png';
import img3 from '../../assets/images/live-card/img-2.png';
import img4 from '../../assets/images/live-card/img-3.png';
import '../../assets/css/owl-slider-style.css';
import Classes from '../ClassesComponenet/Classes';

const OurClasses = () => {
  return (
    <div className="our-classes-div">
      <div className="heading-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-inner-div">
                <div className="heading-title-row">
                  <div className="heading-title-left">
                    <h2>Our Classes</h2>
                  </div>
                  <div className="heading-title-right">
                    <div className="form-group select2-form-group select2-new-group">
                      <div className="select-box select-custom2 select-custom2-general round-12">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="owl-slider-new-main-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="owl-slider-new-main-slider">
              <OwlCarousel
                    className="owl-carousel owl-theme our-classes-owl"
                    id="our-classes-owl"
                    loop
                    items={4}
                    margin={15}
                    nav={false}
                    dots={false}
                    stagePadding={0}
                    autoPlay={true}
                    smartSpeed={2000}
                    responsiveClass={true}
                    responsive={{
                      0: {
                        items: 1.3,
                        autoplay: true,
                        dots: true,
                      },
                      600: {
                        items: 2.3,
                      },
                      1200: {
                        items: 3.1,
                      },
                      1600: {
                        items: 4,
                      },
                    }}
                  >
                      <Classes img={img1} />
                      <Classes img={img2} />
                      <Classes img={img3} />
                      <Classes img={img4} />
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
