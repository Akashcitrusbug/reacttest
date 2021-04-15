import React from 'react';

const CreatorAboutComponent = () => {
        return (
            <>
             <div className="about-creator-div">
                <div className="heading-div">
                <div className="container container-1000">
                    <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="heading-inner-div">
                        <h2>About Michael Gray</h2>

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

                        <div className="skill-category-tabs-div">
                            
                            <div className="skill-category-title">
                            <h4>Skills</h4>
                            </div>

                            <div className="skill-category-inner">
                            <ul className="skill-list-ul">
                                <li><a href="#" className="filter-link">Photography</a></li>
                                <li><a href="#" className="filter-link">Filmmaking</a></li>
                                <li><a href="#" className="filter-link">Business</a></li>
                            </ul>
                            </div>
                        
                        </div>

                        <div className="user-desc-row">
                            <div className="desc-div">
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
export default CreatorAboutComponent;
