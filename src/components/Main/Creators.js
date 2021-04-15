import React from 'react';

const Creators = (props) => {
  return (
    <div class="item">
        <div class="creators-img-mask-slider-box">
        <a href="creators-details.html" class="creators-img-link">
            <div class="creators-img-mask-thumb">
            <div class="img-thumb"> <img src={props.img} class="img-fluid img-responsive" alt="image" /> </div>
            <div class="view-details-text"> <p><span class="block">View </span> <span class="block">Details</span></p> </div>
            </div>
        </a>
        <div class="creators-content-div">
            <h3><a href="creators-details.html" class="link">{props.name}</a></h3>
            <h4>Photographer</h4>
        </div>
        </div>

        <div class="creators-img-mask-slider-box">
        <a href="creators-details.html" class="creators-img-link">
            <div class="creators-img-mask-thumb">
            <div class="img-thumb"> <img src={props.img} class="img-fluid img-responsive" alt="image" /> </div>
            <div class="view-details-text"> <p><span class="block">View </span> <span class="block">Details</span></p> </div>
            </div>
        </a>
        <div class="creators-content-div">
            <h3><a href="creators-details.html" class="link">{props.name}</a></h3>
            <h4>Photographer</h4>
        </div>
        </div>
    </div>
  );
};

export default Creators;

