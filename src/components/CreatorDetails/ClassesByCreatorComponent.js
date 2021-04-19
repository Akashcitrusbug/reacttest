import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Classes from './Classes';
import SingleCreatoClasses from '../../data/CreatorDetailData/SingleCreatorClass/SingleCreatorClassData.json'

const ClassesByCreatorComponent = () => {
        return (
            <>
             <div className="classes-by-creator-div">

                <div className="heading-div">
                    <div className="container container-1000">
                        <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="heading-inner-div">
                            <h2>Classes by Michael Gray</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="owl-slider-main-div">
                    <div className="container container-1000">
                        <div className="row">
                        <div className="col-lg-12 col-md-12">

                            <div className="owl-slider-main-slider">
                            <OwlCarousel
                                className="owl-carousel owl-theme our-classes-owl"
                                id="our-classes-owl"
                                loop={true}
                                items={4}
                                margin={15}
                                dots={false}
                                >
                                    {
                                        SingleCreatoClasses.singlecreatorclass.map((classes,index)=>{
                                            return <Classes classdata={classes} />
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
export default ClassesByCreatorComponent;
