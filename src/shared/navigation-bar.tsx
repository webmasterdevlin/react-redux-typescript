import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const NavigationBar = () => (
  <Navbar bg="dark" expand="lg" className={'mb-5'}>
    <Nav className="mr-auto">
      <Link className={`${navStyle} p-1 m-1`} to={'heroes'}>
        Saga
      </Link>

      <Link className={`${navStyle} p-1 m-1`} to={'villains'}>
        Thunk
      </Link>

      <Link className={`${navStyle} p-1 m-1`} to={'anti-heroes'}>
        Redux Toolkit
      </Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;

const navStyle = style({ color: 'white' });
