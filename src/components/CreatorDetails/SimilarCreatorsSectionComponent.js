import React from 'react';
import SimilarCreatorsSectionItem from './SimilarCreatorsSectionItem';
import img1 from '../../assets/images/creators/creators1.jpg';
import img2 from '../../assets/images/creators/creators2.jpg';
import img4 from '../../assets/images/creators/creators4.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MaterialCreatorsSectionComponent = () => {
    return (
        <>
            <div className="similar-creators-div">

                <div className="heading-div">
                    <div className="container container-1000">
                        <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="heading-inner-div">
                            <h2>Similar creators </h2>                 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="similar-creators-slider-div">
                    <div className="container container-1000">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">

                                <div className="similar-creators-slider">
                                <OwlCarousel
                                    className="owl-carousel owl-theme similar-creators-owl-div"
                                    id="similar-creators-owl"
                                    loop={true}
                                    items={3}
                                    margin={10}
                                    dots={false}
                                    >
                                        <SimilarCreatorsSectionItem img={img4} name='Mitchell Mullins' />
                                        <SimilarCreatorsSectionItem img={img2} name='Nolan Omura' />
                                        <SimilarCreatorsSectionItem img={img1} name='Benn Tkalcevic' />
                                </OwlCarousel>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MaterialCreatorsSectionComponent;