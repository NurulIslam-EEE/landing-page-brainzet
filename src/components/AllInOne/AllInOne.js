import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarDays, faFileLines } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';

const AllInOne = () => {
    return (
        <div>
            <h2 className='text-center' style={{ color: '#2F327D' }}>All-In-One <span style={{ color: '#F48C06' }}> Cloud Software.</span></h2>

            <p className='text-center'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>

            <div className='allInOne '>
                <div className='row m-0'>
                    <Card className='col-lg-4 singleCard' style={{ width: '350px', height: '430px' }}>
                        <div style={{ background: ' #5B72EE', borderRadius: '50%', height: '50px', width: '50px', color: 'white', margin: '0 auto', marginTop: '-30px', paddingTop: '10px', paddingLeft: '17px' }}>
                            <FontAwesomeIcon icon={faFileLines} />
                        </div>
                        <Card.Body style={{ paddingTop: "60px" }}>

                            <Card.Title>Online Billing, Invoicing, & Contracts
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className='col-lg-4 singleCard' style={{ width: '350px', height: '430px' }}>
                        <div style={{ background: ' #F48C06', borderRadius: '50%', height: '50px', width: '50px', color: 'white', margin: '0 auto', marginTop: '-30px', paddingTop: '10px', paddingLeft: '17px' }}>
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <Card.Body style={{ paddingTop: "60px" }} >


                            <Card.Title>Easy Scheduling & Attendance Tracking
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card className='col-lg-4 singleCard' style={{ width: '350px', height: '430px' }}>
                        <div style={{ background: ' #29B9E7', borderRadius: '50%', height: '50px', width: '50px', color: 'white', margin: '0 auto', marginTop: '-30px', paddingTop: '10px', paddingLeft: '17px' }}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <Card.Body style={{ paddingTop: "60px" }}>

                            <Card.Title>Customer Tracking
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default AllInOne;