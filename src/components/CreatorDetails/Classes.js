import React from 'react';

const Classes = (props) => {
        return (
            <>
             <div className="item">  
                <div className="our-video-img-slider-box">
                <div className="our-video-img-thumb">
                    <div className="img-thumb"> <img src={props.classdata.img} className="img-fluid img-responsive" alt="image" /> </div>
                    <div className="video-button-div"> <a href="#" className="video-button-link"><i className="fa fa-play"></i></a> </div>
                </div>
                <div className="our-content-div">
                    <h3><a href="#" className="link">{props.classdata.description}</a></h3>
                    <h4>{props.classdata.name}</h4>
                </div>
                </div>
            </div>
            </>
        )
    }
export default Classes;
