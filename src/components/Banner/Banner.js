import React from 'react';
import './Banner.css';
import person from '../../img/header-pic.png';

const Banner = () => {
    return (
        <div className='banner '>
            <div className='row'>


                <div className='col-md-5 p-5' style={{ marginTop: '210px' }}>
                    <h1><span>Studying </span>Online is now much easier</h1>
                    <p> Skilline  is an interesting platform that will teach you in more an interactive way</p>
                    <button>Join for free</button>
                </div>
                <div className='col-md-7' style={{ marginBottom: '0px' }}>
                    <img src={person} className='img-fluid' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;