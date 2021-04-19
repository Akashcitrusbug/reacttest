import React from 'react';

const Classes = (props) => {
  return (
            <div className="item">  
                <div className="our-video-common-slider-box">
                <div className="our-video-img-thumb">
                    <div className="img-thumb"> <img src={props.class.img} className="img-fluid img-responsive" alt="image" /> </div>
                    <div className="like-box-abs"> <button className="like-button"><span className="like-icon "> </span></button> </div>
                    <div className="time-box-abs"> <button className="time-button"> 13:47 </button> </div>
                </div>
                <div className="our-content-div">
                    <div className="our-content-row">
                    <div className="our-content-full">
                        <h4><a href="">{props.class.class_detail}</a> </h4>
                    </div>

                    <div className="our-content-left">
                        <div className="thumb-img">
                        <a href="#" className="link">
                            <img src={props.class.class_creator_img} className="img-fluid user" alt="user" />
                        </a>
                        </div>
                    </div>
                    <div className="our-content-right">
                        <h3><a href="#" className="link">{props.class.name} <span className="icon-rounded-span check-icon-rounded">
                            <span className="material-icons">done</span></span> </a></h3> <p>{props.class.expertise}</p>
                    </div>
                    </div>

                    <div className="our-content-bottom-row">
                    <div className="our-content-bottom-left">
                        <div className="label-div">
                        <span className="txt-label">Popular</span>
                        </div>
                    </div>
                    <div className="our-content-bottom-right">
                        <h4><span className="material-icons">schedule</span> <span className="txt">Posted 10 hours ago</span>  </h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  );
};

export default Classes;
