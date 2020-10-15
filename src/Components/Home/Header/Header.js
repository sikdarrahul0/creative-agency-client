import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className="header-part">
            <div className="container">
            <Navbar bg="transparent" expand="lg">
               <Link to="/home"><Navbar.Brand ><img className="logo-design" src="https://i.ibb.co/sCpn13V/logo.png" alt="logo"/></Navbar.Brand></Link> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-design">
                    <Link className="nav-link px-4 pb-1 font-weight-bold" to="/home">Home</Link>
                    <Link className="nav-link px-4 font-weight-bold" to="/">Our Portfolio</Link>
                    <Link className="nav-link px-4 font-weight-bold" to="/">Our Team</Link>
                    <Link className="nav-link px-4 font-weight-bold" to="/">Contact Us</Link>
                    <Link className="nav-link px-4 font-weight-bold bg-dark rounded text-white" to="/login">Login</Link>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="row mt-md-5">
                <div className="col-md-4 mt-5 pt-2 px-md-4">
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <button className="w-lg-25 btn btn-dark">Hire us</button>
                </div>
                <div className="col-md-7 pl-lg-4 ml-lg-4" >
                    <img className="img-fluid" src="https://i.ibb.co/1vsXk7n/Frame.png" alt="header-logo"/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Header;