import React from 'react';
import MaterialcreatorSectionItem from './MaterialcreatorSectionItem';
import img1 from '../../assets/images/materials/materials-img-01.jpg';
import img2 from '../../assets/images/materials/materials-img-02.jpg';
import img3 from '../../assets/images/materials/materials-img-03.jpg';
import img4 from '../../assets/images/materials/materials-img-04.jpg';
import img5 from '../../assets/images/materials/materials-img-05.jpg';
import img6 from '../../assets/images/materials/materials-img-06.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MaterialCreatorsSectionComponent = () => {
    return (
        <>
            <div className="materials-creators-div">
                <div className="heading-div">
                <div className="container container-1000">
                    <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="heading-inner-div">
                        <div className="heading-title-row">
                            <div className="heading-title-left">
                            <h2>Materials by Michael Gray </h2>
                            </div>
                            <div className="heading-title-right">
                            <div className="link-div"> <a href="#" className="link view-all-link">View All</a> </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="materials-creators-slider-div">
                    <div className="container container-1000">
                        <div className="row">
                        <div className="col-lg-12 col-md-12">

                            <div className="materials-creators-slider">
                            <OwlCarousel
                            className="owl-carousel owl-theme materials-creators-owl-div"
                            id="materials-creators-owl"
                            items={3}
                            loop={true}
                            margin={-150}
                            dots={false}
                        >
                                <MaterialcreatorSectionItem img={img1} name='Photo Presets' />
                                <MaterialcreatorSectionItem img={img2} name='Video LUTs' />
                                <MaterialcreatorSectionItem img={img3} name='SFX' />
                                <MaterialcreatorSectionItem img={img4} name='Photoshop Brushes' />
                                <MaterialcreatorSectionItem img={img5} name='Overlays' />
                                <MaterialcreatorSectionItem img={img6} name='E-Books' />
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