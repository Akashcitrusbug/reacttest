import React from 'react';


const OurNewPricingPlanComponent = () => {

  return (
    <section className="our-pricing-plan-section" id="our-pricing-plan-section">
      <div className="our-pricing-plan-div">
        <div className="container container-800">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-div">
                <div className="heading-inner-div">
                  <h2>Our Pricing Plan</h2>
                  <h3>Our exclusive course in 2 sets</h3>
                </div>
              </div>

              <div className="our-pricing-plans-root">
                <div className="our-pricing-plans-top">
                  <div className="our-pricing-plan-row">
                    
                      <div className="row">
                       

                            <div className="col-lg-6 col-md-6">
                              <div className="our-pricing-plan-card">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="plan-select01"
                                  name="select-plan-custom"
                                />
                                <label htmlFor="plan-select01" className="flex-plan-card-inner">
                                  <div className="check-icon-group">
                                    <span className="check-span-rounded">
                                      <i className="bg-custom-icon custom-check-icon"></i>
                                    </span>
                                  </div>

                                  <div className="min-details-div">
                                    <div className="fp-title-top">
                                      <div className="fp-title-top-left">
                                        <span className="label-span active">
                                          PRO
                                        </span>
                                      </div>
                                      <div className="fp-title-top-right">
                                        <h3>
                                          $16
                                          <span className="text-small">/Month</span>
                                        </h3>
                                        <p>$192 Billed Yearly</p>
                                      </div>
                                    </div>
                                    <div className="desc-inner-box">
                                      <ul className="check-list-ul">
                                       <li>25 Exclusive Tutorials</li>
                                       <li>Over 25 LUT's and Presets</li>
                                       <li>Photoshop Brush Tools</li>
                                       <li>SFX Pack</li>
                                       <li>Media Kit Templates</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="plan-btn">
                                    <button className='btn btn-primary-outline btn-primary-outline-big btn-get-started-plan active'>
                                      Get Started
                                    </button>
                                  </div>
                                </label>
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
    </section>
  );
};

export default OurNewPricingPlanComponent;
