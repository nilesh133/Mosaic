import React from "react";
import "./services.css";

// icons import
import { ImStack } from "react-icons/im";

const Services = () => {
  return (
    <div className="services">
      <div className="main_container">
        <div className="main_row">
          <div className="column-4">
            <div className="services_left mb-3">
              <h3 className="mb-3">Our Services</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </div>
          <div className="column-8">
            <div className="main_row">
              <div className="column-6">
                <div className="services_right_box">
                  <div className="services_right_box_icon">
                    <span>
                      <ImStack />
                    </span>
                  </div>
                  <h3>Design</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
              <div className="column-6">
                <div className="services_right_box">
                  <div className="services_right_box_icon">
                    <span>
                      <ImStack />
                    </span>
                  </div>
                  <h3>Industrial Design</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
              <div className="column-6">
                <div className="services_right_box">
                  <div className="services_right_box_icon">
                    <span>
                      <ImStack />
                    </span>
                  </div>
                  <h3>Architectural Support</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
              <div className="column-6">
                <div className="services_right_box">
                  <div className="services_right_box_icon">
                    <span>
                      <ImStack />
                    </span>
                  </div>
                  <h3>Renovation</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
