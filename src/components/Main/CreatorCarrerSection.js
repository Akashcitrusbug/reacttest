import React from 'react';

const CreatorCarrerSection = () => {
  return (
    <section className="creative-career-today-section">
      <div className="creative-career-today-div">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="content-div">
                <h2>Start your creative career today</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="button-group-div">
                <a href="/creator/signup" className="btn btn-primary-all">
                  <span className="text">Get Started Now</span>
                  <span className="span-rounded">
                    <span className="material-icons"> keyboard_arrow_right </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorCarrerSection;
