import React from 'react';

const Classes = (props) => {
        return (
            <>
             <div className="item">  
                <div className="our-video-img-slider-box">
                <div className="our-video-img-thumb">
                    <div className="img-thumb"> <img src={props.img} className="img-fluid img-responsive" alt="image" /> </div>
                    <div className="video-button-div"> <a href="#" className="video-button-link"><i className="fa fa-play"></i></a> </div>
                </div>
                <div className="our-content-div">
                    <h3><a href="#" className="link">Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit aliquet elit</a></h3>
                    <h4>Michael Gray</h4>
                </div>
                </div>
            </div>
            </>
        )
    }
export default Classes;
