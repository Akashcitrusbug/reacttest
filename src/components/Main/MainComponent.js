import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/fonts/gilroy/gilroy-style.css';
import '../../assets/fonts/moderat/moderat-style.css';
import '../../assets/css/all.min.css';
import '../../assets/css/home-style.css';
import '../../assets/css/style.css';
import '../../assets/css/custom.css';

import BackgroundComponent from './BackgroundComponent';
import OurClasses from './OurClasses';
import MiddelBanner from './MiddelBanner';
import MeetTheCreators from './MeetTheCreators';
import Testimonials from './Testimonials';
import PricingPlan from './PricingPlan';

const MainComponent = () => {
  return (
    <div className="main-middle-area pt-custom-0">
      <section className="main-banner-section">
        <BackgroundComponent />
      </section>
      <section className="our-classes-section">
        <OurClasses />
      </section>
      <div className="block-classes-common-pattern-root">
        <MiddelBanner />
      </div>
      <section className="meet-the-creators-section">
        <MeetTheCreators />
      </section>
      <section className="testimonials-section" id="testimonials-section">
        <Testimonials />
      </section>
      <section className="our-pricing-plan-section" id="our-pricing-plan-section">
        <PricingPlan />
      </section>
    </div>
  );
};

export default MainComponent;
