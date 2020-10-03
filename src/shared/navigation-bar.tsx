import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const NavigationBar = () => (
  <Navbar bg="dark" expand="lg" className={'mb-5'}>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link className={navStyle} to={'heroes'}>
          Heroes
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className={navStyle} to={'villains'}>
          Villains
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className={navStyle} to={'anti-heroes'}>
          Anti-Heroes
        </Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;

const navStyle = style({ color: 'white' });
