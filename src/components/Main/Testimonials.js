import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialsComponent from '../TestinomialsComponent/TestinomialsComponent';
import Testinomialimages from '../TestinomialsComponent/Testinomialimages';
import TestinomailData from '../../data/Testinomialdata/data.json';
import TestinomailImageData from '../../data/Testinomialdata/testinomailimagedata.json';

const Testimonials = () => {

  return (
    <div className="testimonials-div">
      <div className="heading-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-inner-div">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-owl-slider-main-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="testimonials-slider-slider-root">
              <OwlCarousel
                    className="owl-carousel owl-theme testimonials-owl-div"
                    id="sync1"
                    loop={true}
                    items={1}
                    margin={15}
                    startPosition
                    dots = {false}
                  >
                    {
                      TestinomailData.data.map((testinomaildata, index) => {
                        return (<>
                        <TestimonialsComponent data={testinomaildata}/>
                        </>);
                      })
                    }
                    

                    
                    </OwlCarousel>
              </div>
              <div className="testimonial-thumb">
              <OwlCarousel
                    id="sync2"
                    className="owl-carousel owl-theme"
                    loop = {true}
                    items={9}
                    dots={false}
                    startPosition
                  >
                {
                      TestinomailImageData.imagedata.map((testinomailimagedata, index) => {
                        return (<>
                        <Testinomialimages image={testinomailimagedata}/>
                        </>);
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

export default Testimonials;
