import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarApp = ({ title, icon }) => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <div className='container'>
        <Navbar.Brand href='#home'>
          <i className={icon}></i> {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

NavbarApp.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

NavbarApp.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavbarApp;
