import React from 'react';
import './workflow.css';

// icons import
import { SiCodesignal } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { RiStackFill } from "react-icons/ri";

const Workflow = () => {
  return (
    <div className='workflow'>
        <div className='main_container'>
            <div className='main_row pb-3 mb-3'>
                <div className='column-4 workflow_heading'>
                    <h3>Our Work Flow</h3>
                </div>
                <div className='column-8 workflow_heading_p'>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.
                    </p>
                </div>
            </div>
            <div className='main_row workflow_content'>
                <div className='column-4 workflow_content_box'>
                    <div className='workflow_content_box_icon'>
                        <span><SiCodesignal/></span>
                    </div>
                    <div className='workflow_content_box_details'>
                        <h3>Perfectly Design</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
                <div className='column-4 workflow_content_box'>
                    <div className='workflow_content_box_icon'>
                        <span><GiProcessor/></span>
                    </div>
                    <div className='workflow_content_box_details'>
                        <h3>Carefully Planned</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
                <div className='column-4 workflow_content_box'>
                    <div className='workflow_content_box_icon'>
                        <span><RiStackFill/></span>
                    </div>
                    <div className='workflow_content_box_details'>
                        <h3>Smartly Execute</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow