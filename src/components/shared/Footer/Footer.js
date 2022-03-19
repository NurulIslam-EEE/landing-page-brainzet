import React from 'react';
import logo2 from '../../../img/Polygon 2.png';

const Footer = () => {
    return (
        <div className='footer m-0'>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'relative', marginRight: '50px' }}>
                        <h4 style={{ position: 'absolute', left: '20px', top: '20px', fontWeight: '700' }}>Skilline</h4>
                        <img src={logo2} alt="" />
                    </div>

                    <h2>Virtual Class for Zoom</h2>

                </div>

                <div>
                    <h2 style={{ color: '#B2B3CF' }}>Subscribe to get our Newsletter</h2>
                    <div >
                        <input style={{ background: 'transparent', borderRadius: "20px", border: '1px solid #B2B3CF', color: '#B2B3CF' }} placeholder='Your Email' type="text" name="" id="" />
                        <button style={{ background: '#545AE7', border: '0', borderRadius: "20px", color: 'white' }}>Subscribe</button>
                    </div>
                </div>
                <div>
                    <h2 style={{ color: '#B2B3CF' }}>Careers | Privacy Policy | Terms & Conditions</h2>
                    <h2 style={{ color: '#B2B3CF' }}>© 2021 Class Technologies Inc. </h2>
                </div>

            </div>
        </div>
    );
};

export default Footer;