import React from 'react';
import {Link} from 'react-router-dom';

const Creators = (props) => {
  return (
    <div className="item">
        <Link to='/creator-detail'>
        <div className="creators-img-mask-slider-box">
            <a href="creators-details.html" className="creators-img-link">
                <div className="creators-img-mask-thumb">
                <div className="img-thumb"> <img src={props.creator.img} className="img-fluid img-responsive" alt="image" /> </div>
                <div className="view-details-text"> <p><span className="block">View </span> <span className="block">Details</span></p> </div>
                </div>
            </a>
            <div className="creators-content-div">
                <h3><a href="creators-details.html" className="link">{props.creator.name}</a></h3>
                <h4>Photographer</h4>
            </div>
        </div>
        </Link>

        <Link to='/creator-detail'>
            <div className="creators-img-mask-slider-box">
                <a href="creators-details.html" className="creators-img-link">
                    <div className="creators-img-mask-thumb">
                    <div className="img-thumb"> <img src={props.creator.img} className="img-fluid img-responsive" alt="image" /> </div>
                    <div className="view-details-text"> <p><span className="block">View </span> <span className="block">Details</span></p> </div>
                    </div>
                </a>
                <div className="creators-content-div">
                    <h3>{props.creator.name}</h3>
                    <h4>Photographer</h4>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default Creators;

