import React from 'react';
import './stats.css';

const Stats = () => {
  return (
    <div className='stats'>
        <div className='main_container'>
            <div className='main_row'>
                <div className='column-3 stats_box'>
                    <h3>18</h3>
                    <p>Years Of Experienced</p>
                </div>
                <div className='column-3 stats_box'>
                    <h3>351</h3>
                    <p>Happy Clients</p>
                </div>
                <div className='column-3 stats_box'>
                    <h3>564</h3>
                    <p>Finished Projects</p>
                </div>
                <div className='column-3 stats_box'>
                    <h3>300</h3>
                    <p>Working Days</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats