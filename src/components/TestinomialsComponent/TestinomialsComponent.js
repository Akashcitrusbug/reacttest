import React from 'react';

const TestimonialsComponent = (props) => {

  return (
    <div class="item">

    <div class="testimonials-card-box">
      <div class="testimonials-card-inner">
        <div class="user-top-row">
          <div class="img-thumb"> <img src={props.img} class="img-fluid img-responsive" alt="testimonials" /> </div>
          <div class="text-content-div">
            <h3><a href="#" class="link">{props.name}</a></h3>
            <div class="star-row-div">
              <ul class="star-rating-ul">
                <li><span class="material-icons star-custom-icon active">star</span></li>
                <li><span class="material-icons star-custom-icon active">star</span></li>
                <li><span class="material-icons star-custom-icon active">star</span></li>
                <li><span class="material-icons star-custom-icon active">star</span></li>
                <li><span class="material-icons star-custom-icon active">star</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user-desc-row">
          <div class="desc-div">
            <p>{props.data}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonial-info">
      <h3>{props.second_name}</h3>
      <p>{props.designation} </p>
    </div>

  </div>

  );
};

export default TestimonialsComponent;
