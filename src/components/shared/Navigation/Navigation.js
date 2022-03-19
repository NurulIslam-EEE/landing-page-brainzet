import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/Polygon 1.png';

const Navigation = () => {
    return (
        <Navbar style={{ width: '90%', margin: '0 auto' }} fixed="top" bg="transparent" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{ position: 'relative', marginRight: '50px' }} href="#">
                    <img src={logo} height='50px' width='50px' alt="" />
                    <h4 style={{ position: 'absolute', left: '15px', top: '15px', fontWeight: '700' }}>Skilline</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 align-items-center"

                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Careers</Nav.Link>

                        <Nav.Link href="#" > Blog</Nav.Link>
                        <Nav.Link href="#" > About Us</Nav.Link>
                        <Nav.Link href="#action2">
                            <button className='login'>Login</button>
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <button className='sign-up'>Sign up</button>
                        </Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;