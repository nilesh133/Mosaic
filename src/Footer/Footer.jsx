import React from "react";
import "./footer.css";

// icons import
import { MdArrowRightAlt } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_container">
        <div className="main_row">
          <div className="column-3 footer_mosaic">
            <h3 className="footer_section_header">Mosaic</h3>
            <div className="footer_mosaic_content">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="footer_mosaic_content_iconcontainer">
                <span className="footer_mosaic_content_icon"><FaTwitter/></span>
                <span className="footer_mosaic_content_icon"><FaFacebookF/></span>
                <span className="footer_mosaic_content_icon"><FaInstagram/></span>
            </div>
          </div>
          <div className="column-3 footer_links">
            <h3 className="footer_section_header">Links</h3>
            <ul className="footer_links_ul">
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Home</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>About</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Services</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Projects</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Contects</p>
              </li>
            </ul>
          </div>
          <div className="column-3 footer_services">
            <h3 className="footer_section_header">Services</h3>
            <ul className="footer_links_ul">
            <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Architectural Design</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Interior Design</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Exterior Design</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>Lighting Design</p>
              </li>
              <li>
                <span>
                  <MdArrowRightAlt />
                </span>
                <p>AutoCAD Service</p>
              </li>
            </ul>
          </div>
          <div className="column-3 footer_newsletter">
            <h3 className="footer_section_header">Newsletter</h3>
            <div className="footer_newsletter_content">
              <p>
                Far far away, behind the word mountains, far from the countries.
              </p>
              <div className="footer_newsletter_input">
                <input type="text" placeholder="Enter email address" />
              </div>
              <div className="footer_newsletter_button">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
