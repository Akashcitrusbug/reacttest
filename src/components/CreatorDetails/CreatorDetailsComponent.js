import React from 'react';
import Header from '../Header/Header';
import CreatorDetailFooter from './CreatorDetailFooter';
import InnerBannerComponent from './InnerBannerComponent';
import CreatorAboutComponent from './CreatorAboutComponent';
import ClassesByCreatorComponent from './ClassesByCreatorComponent';
import UpcomingLiveStream from './UpcomingLiveStreamComponent';
import MaterialCreatorsSectionComponent from './MaterialCreatorsSectionComponent';
import SimilarCreatorsSectionComponent from './SimilarCreatorsSectionComponent';

import '../../assets/css/bootstrap.min.css';
import '../../assets/fonts/gilroy/gilroy-style.css';
import '../../assets/fonts/moderat/moderat-style.css';
import '../../assets/css/all.min.css';
import '../../assets/css/feather.min.css';
import '../../assets/css/header.css';
import '../../assets/css/footer.css';
import '../../assets/css/modal-style.css';
import '../../assets/css/booking-modal-style.css';
import '../../assets/css/tab-style.css';
import '../../assets/css/custom-forms-style.css';
import '../../assets/css/owl-slider-style.css';
import '../../assets/css/creators-details-style.css';
import '../../assets/css/style.css';

const CreatorDetailsComponent = () => {
    return (
        <>
        <div id="wrapper" className="wrapper home-wrapper">
            <Header />
            <div className="main-middle-area pt-custom-0">
                <section className="main-inner-banner-section" id="main-inner-banner-section">
                    <InnerBannerComponent />
                </section>
                <section className="about-creator-section" id="about-creator-section">
                    <CreatorAboutComponent />
                </section>
                <section className="classes-by-creator-section" id="classes-by-creator-section">
                    <ClassesByCreatorComponent />
                </section>
                <section className="upcoming-live-streams-section" id="upcoming-live-streams-section">
                    <UpcomingLiveStream />
                </section>
                <section className="materials-creators-section" id="materials-creators-section">
                    <MaterialCreatorsSectionComponent />
                </section>
                <section className="similar-creators-section" id="similar-creators-section">
                    <SimilarCreatorsSectionComponent />
                </section>

            </div>
            <CreatorDetailFooter />
        </div>
        </>
    )
}

export default CreatorDetailsComponent;