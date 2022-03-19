import React from 'react';
import allIn from '../../img/confident-teacher-explaining-lesson-pupils 1.png';

const YouCanDo = () => {
    return (
        <div>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }} className='row'>
                <div className='col-md-6 p-5'>

                    <h1 style={{ color: '#2F327D' }}>Everything you can do in a physical classroom,<span style={{ color: '#f48c06' }}>you can do with Skilline</span> </h1>
                    <p>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <button>Learn more</button>
                </div>
                <div className='col-md-6'>
                    <img src={allIn} width='550px' height='320px' alt="" />
                </div>
            </div>
        </div>
    );
};

export default YouCanDo;