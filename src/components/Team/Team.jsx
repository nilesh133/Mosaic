import React from 'react';
import './team.css';

// images import
import team_image1 from '../../assets/images/team/team_image1.png';
import team_image2 from '../../assets/images/team/team_image2.png';
import team_image3 from '../../assets/images/team/team_image3.png';
import team_image4 from '../../assets/images/team/team_image4.png';

// icons import
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImGooglePlus } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
    const imgArr = [
        {
            img: team_image1,
            name: 'John Wilson',
            profile: 'Co-Founder / CEO'
        },
        {
            img: team_image2,
            name: 'David Smith',
            profile: 'Architect'
        },
        {
            img: team_image3,
            name: 'Alex Stubbs',
            profile: 'Architect'
        },
        {
            img: team_image4,
            name: 'Tom Marsh',
            profile: 'Architect'
        },
    ]
  return (
    <div className='team'>
        <div className='main_container'>
            <div className='main_row team_header'>
                <div className='column-7 team_header_main'>
                    <span>EXPERT TEAM</span>
                    <h1>Our Architect Team</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </div>
            </div>
            <div className='main_row team_box_outer'>
                {
                    imgArr?.map((image) => {
                        return (
                            <div className='column-3 team_box'>
                                <div className='team_image' style={{backgroundImage: `url(${image.img})`}}>

                                    {/* <img src={image.img} alt="" /> */}
                                </div>
                                <div className='team_box_details'>
                                    <h3>{image.name}</h3>
                                    <h4>{image.profile}</h4>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <div className='team_box_details_social'>
                                        <FaTwitter/>
                                        <FaFacebookF/>
                                        <ImGooglePlus/>
                                        <FaInstagram/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Team