import React from 'react';
import UpcomingLiveStreamItem from './UpcomingLiveStramItem';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import UpcomingLiveStreamData from '../../data/CreatorDetailData/UpcomingLiveEvent/UpcomingLiveEventData.json';


const UpcomingLiveStream = () => {
    return (
        <>
        <div className="upcoming-live-streams-div">

            <div className="heading-div">
            <div className="container container-1000">
                <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="heading-inner-div">
                    <h2>Upcoming live streams</h2>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="upcoming-live-streams-slider-div">
                <div className="container container-1000">
                    <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="owl-slider-main-slider">
                        <OwlCarousel
                            className="owl-carousel owl-theme upcoming-live-streams-owl"
                            id="upcoming-live-streams-owl"
                            loop={true}
                            items={1}
                            margin={20}
                            autoWidth
                            dots={false}
                            >
                                {
                                    UpcomingLiveStreamData.upcomingliveevent.map((upcomingstream,index)=>{
                                        return <UpcomingLiveStreamItem streamdata={upcomingstream} />
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

export default UpcomingLiveStream;