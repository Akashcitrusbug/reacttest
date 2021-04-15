import React from 'react';


const MaterialcreatorSectionItem = (props) => {
    return (
        <>
        <div className="item">
            <div className="materials-creators-slider-box">
                <a href="#" className="creators-img-link">
                <div className="creators-img-mask-thumb">
                    <div className="img-thumb"> <img src={props.img} className="img-fluid img-responsive" alt="image" /> </div>
                </div>
                </a>
                <div className="creators-content-div">
                <h3><a href="#" className="link">{props.name}</a></h3>
                </div>
            </div>
        </div>

        </>
    )
}

export default MaterialcreatorSectionItem;