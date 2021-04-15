import React from 'react';


const SimilarCreatorsSectionItem = (props) => {
    return (
        <>
        <div className="item">
            <div className="similar-creators-slider-box">
            <a href="#" className="creators-img-link">
                <div className="creators-img-mask-thumb">
                <div className="img-thumb"> <img src={props.img} className="img-fluid img-responsive" alt="image" /> </div>
                </div>
            </a>
            <div className="creators-content-div">
                <h3><a href="#" className="link">{props.name}</a></h3>
                <h4>Filmmaker</h4>
                <div className="star-row-div">
                <div className="star-left-div">
                    <ul className="star-rating-ul">
                    <li><span className="material-icons star-custom-icon active">star</span></li>
                    <li><span className="material-icons star-custom-icon active">star</span></li>
                    <li><span className="material-icons star-custom-icon active">star</span></li>
                    <li><span className="material-icons star-custom-icon active">star</span></li>
                    <li><span className="material-icons star-custom-icon active">star</span></li>
                    </ul>
                </div>
                <div className="star-right-div">
                    <span className="text">(99)</span>
                </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default SimilarCreatorsSectionItem;