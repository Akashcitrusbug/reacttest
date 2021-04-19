import React from 'react';
import MaterialcreatorSectionItem from './MaterialcreatorSectionItem';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MaterialByCreatorData from '../../data/CreatorDetailData/MaterialByCreator/MaterialByCreatorData.json';


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
                                {
                                    MaterialByCreatorData.materialbycreator.map((materialdata,index)=>{
                                        return <MaterialcreatorSectionItem materialbycreatordata={materialdata} />
                                    })
                                }
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