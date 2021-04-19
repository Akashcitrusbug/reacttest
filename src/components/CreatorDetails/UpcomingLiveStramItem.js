import React, {useEffect, useState} from 'react';
import LoginModal from '../../modal/LoginModal';

const UpcomingLiveStreamItem = (props) => {
    const [loginShow, setLoginShow] = useState(false);

    const handleLoginShow = () => setLoginShow(true);
    const handleLoginClose = () => setLoginShow(false);
    return (
        <>
        <div class="item">  
            <div class="live-streams-img-slider-box">
            <div class="live-streams-img-thumb">
                <div class="img-thumb"> <img src={props.streamdata.img} class="img-fluid img-responsive" alt="image" /> </div>
                <div class="video-overlay-content-div">
                <div class="video-overlay-content-row">
                    <div class="video-overlay-content-left">
                    <div class="label-div">
                        <ul>
                        <li><a href="#" class="link link-black">Photography</a></li>
                        <li><a href="#" class="link link-black">Filmmaking</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="video-overlay-content-right">
                    <div class="sp-label-div">
                        <a href="#" class="link link-black-sp"> <i class="bg-custom-icon video-camera-icon"></i> Sneak Peek</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="live-streams-content-div">
                <div class="live-streams-content-row">
                <div class="live-streams-content-left">

                    <div class="user-top-box">
                    <div class="img-thumb"> <img src={props.streamdata.profile_img} class="img-fluid img-responsive" alt="testimonials" /> </div>
                    <div class="text-content-div">
                        <h3><a href="creator-class-detail.html" class="link">{props.streamdata.description}</a></h3>
                        <div class="other-info-row-div">
                        <div class="time-row">
                            <div class="time-box">
                            <span class="icon-span"><i class="bg-custom-icon calendar-time-icon"></i></span>
                            <span class="text">{props.streamdata.time} <span class="dot-span">•</span> <a href="#" class="link">{props.streamdata.name}</a></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div class="live-streams-content-right">
                    <div class="book-button-div">
                    <div class="btn-row"> <a href="#" class="btn btn-common-primary" data-toggle="modal" data-target="#login-to-book-modal" onClick={handleLoginShow}> <i class="bg-custom-icon invoice-icon"></i> Book now </a> </div>
                    <div class="text-center-row">
                        <p class="text-italic">Hurry up! Only few seats are left</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
        
        <LoginModal show={loginShow} onHide={handleLoginClose} />
        </>
    )

}

export default UpcomingLiveStreamItem;