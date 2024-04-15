import React, { useState } from "react";
import "./projects.css";

// images import
import project_image_1 from "../../assets/images/projects/projects_image1.png";
import project_image_2 from "../../assets/images/projects/projects_image2.png";
import project_image_3 from "../../assets/images/projects/projects_image3.png";
import project_image_4 from "../../assets/images/projects/projects_image4.png";
import project_image_5 from "../../assets/images/projects/projects_image5.png";
import project_image_6 from "../../assets/images/projects/projects_image6.png";
import project_image_7 from "../../assets/images/projects/projects_image7.png";
import project_image_8 from "../../assets/images/projects/projects_image8.png";

// icons import
import { FaExpandAlt } from "react-icons/fa";

const Projects = () => {
  const [imagesArr] = useState([
    {
      image: project_image_1,
    },
    {
      image: project_image_2,
    },
    {
      image: project_image_3,
    },
    {
      image: project_image_4,
    },
    {
      image: project_image_5,
    },
    {
      image: project_image_6,
    },
    {
      image: project_image_7,
    },
    {
      image: project_image_8,
    },
  ]);
  return (
    <div className="projects">
      <div className="main_container">
        <div className="main_row">
          <div className="column-4">
            <div className="projects_heading_small">
              <span className="projects_heading_small_span">
                <small>Projects</small>
              </span>
              <h2 className="projects_heading_small_h2">Featured Projects</h2>
            </div>
          </div>
          <div className="column-8">
            <div className="projects_heading_para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic
                country, in which roasted parts of sentences fly into your
                mouth.
              </p>
            </div>
            <div className="projects_heading_options">
              <span>All work</span>
              <span>Interior</span>
              <span>Exterior</span>
              <span>Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_container">
        <div className="main_row no-gutters">
          {/* {imagesArr?.map((img, i) => {
            return (
              <div className="column-3 projects_container_main" key={i}>
                <div className="projects_container_image">
                  <img src={img.image} alt="" />
                </div>
                <div className="projects_container_text">
                  <span>Exterior Design</span>
                  <h2>Office Interior Design</h2>
                </div>
                <div className="projects_container_icon">
                  <span><FaExpandAlt/></span>
                </div>
              </div>
            )
          })} */}
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_1} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_2} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_3} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_4} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_5} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_6} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_7} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
          <div className="column-3 projects_container_main">
            <div className="projects_container_image">
              <img src={project_image_8} alt="" />
            </div>
            <div className="projects_container_text">
              <span>Exterior Design</span>
              <h2>Office Interior Design</h2>
            </div>
            <div className="projects_container_icon">
              <span>
                <FaExpandAlt />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
