import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Creators from './Creators'
import MeetTheCreatorData from '../../data/MeetTheCreatorData/meetthecreator.json';


const MeetTheCreators = () => {
  return (
    <div className="meet-the-creators-div">
      <div className="heading-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-inner-div">
                <h2>Meet The Creators</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creators-owl-slider-main-div">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="creators-owl-slider-main-slider">
              <OwlCarousel
                    className="owl-carousel owl-theme meet-the-creators-owl-div"
                    id="our-classes-owl"
                    loop={true}
                   
                    margin={10}
                    nav={false}
                    dots={false}
                    stagePadding={0}
                    autoPlay={true}
                    smartSpeed={2000}
                    responsiveClass={true}
                    responsive={{
                      0: {
                        items: 2,
                        autoplay: true,
                        center: true,
                        margin: 3
                      },
                      600: {
                        items: 2.3,
                      },
                      1200: {
                        items: 3.1,
                      },
                      1600: {
                        items: 4.8,
                      },
                    }}
                  >
                      {
                        MeetTheCreatorData.meetthecreator.map((meetthecreators, index)=>{
                          return <Creators creator={meetthecreators}/>
                        })
                      }
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheCreators;
