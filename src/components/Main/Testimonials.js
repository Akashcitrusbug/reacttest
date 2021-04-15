import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialsComponent from '../TestinomialsComponent/TestinomialsComponent';
import Testinomialimages from '../TestinomialsComponent/Testinomialimages';
import img1 from '../../assets/images/user-01.jpg';
import img2 from '../../assets/images/user-02.jpg';
import t1 from '../../assets/images/testimonial/t1.png';
import t2 from '../../assets/images/testimonial/t2.png';
import t3 from '../../assets/images/testimonial/t3.png';
import t4 from '../../assets/images/testimonial/t4.png';
import t5 from '../../assets/images/testimonial/t5.png';

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
                    <TestimonialsComponent 
                    data='“Creator Classes is one of the best investments 
                        I"ve made as a freelance Content Creator.I bought this course to brush up on the more technical 
                        side of things that I had missed at the start of my journey, and boy do I wish this course was 
                        around when I first started! The classes are informative, entertaining and cover topics that you 
                        can’t find anywhere else.I highly recommend this if you want to develop a creative passion or if 
                        you’re serious about a career in this industry!”' 
                    name='Brendon Shrek' 
                    second_name='Ryan Bettins' 
                    designation='Marketing Manager, Netflix'
                    img={img1} />
                    <TestimonialsComponent 
                    data='“The quality of the Creator Classes content and visuals are unmatched! 
                        The information provided in each class is clear, detailed and thoroughly explained. 
                        As I"m starting to take my passion for creating content more seriously the ability to find invaluable 
                        and trusted information in one all-inclusive course is ideal. Each tutorial contains such a high volume 
                        of quality information that is clearly explained, so I can easily understand all the information without 
                        it ever feeling overwhelming! I"ve learnt so many pieces of information and nuggets of wisdom that will propel 
                        me forward on my creative journey.”' 
                    name='Lizzy Read' 
                    second_name='Ryan Bettins' 
                    designation='Marketing Manager, Netflix'
                    img={img2} />
                    <TestimonialsComponent 
                    data='“Creator Classes is one of the best investments 
                        I"ve made as a freelance Content Creator.I bought this course to brush up on the more technical 
                        side of things that I had missed at the start of my journey, and boy do I wish this course was 
                        around when I first started! The classes are informative, entertaining and cover topics that you 
                        can’t find anywhere else.I highly recommend this if you want to develop a creative passion or if 
                        you’re serious about a career in this industry!”' 
                    name='Brendon Shrek'
                    second_name='Ryan Bettins'
                    designation='Marketing Manager, Netflix'
                    img={img1} />
                    <TestimonialsComponent data='“The quality of the Creator Classes content and visuals are unmatched! 
                                    The information provided in each class is clear, detailed and thoroughly explained. 
                                    As I"m starting to take my passion for creating content more seriously the ability to find invaluable 
                                    and trusted information in one all-inclusive course is ideal. Each tutorial contains such a high volume 
                                    of quality information that is clearly explained, so I can easily understand all the information without 
                                    it ever feeling overwhelming! I"ve learnt so many pieces of information and nuggets of wisdom that will propel 
                                    me forward on my creative journey.”' name='Lizzy Read' second_name='Ryan Bettins' designation='Marketing Manager, Netflix' img={img2}   />
                    <TestimonialsComponent data='“Creator Classes is one of the best investments 
                        I"ve made as a freelance Content Creator.I bought this course to brush up on the more technical 
                        side of things that I had missed at the start of my journey, and boy do I wish this course was 
                        around when I first started! The classes are informative, entertaining and cover topics that you 
                        can’t find anywhere else.I highly recommend this if you want to develop a creative passion or if 
                        you’re serious about a career in this industry!”' name='Brendon Shrek' second_name='Ryan Bettins' designation='Marketing Manager, Netflix' img={img1}  />
                    

                    </OwlCarousel>
              </div>
              <div className="testimonial-thumb">
              <OwlCarousel
                    id="sync2"
                    className="owl-carousel owl-theme"
                    loop
                    items={9}
                  >
              <Testinomialimages img={t1} />
              <Testinomialimages img={t2} />
              <Testinomialimages img={t3} />
              <Testinomialimages img={t4} />
              <Testinomialimages img={t5} />
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
