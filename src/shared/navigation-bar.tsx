import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const NavigationBar = () => (
  <Navbar bg="dark" expand="lg" className={'mb-5'}>
    <Nav className="mr-auto">
      <Link className={`${navStyle} p-1 m-1`} to={'/toolkit'}>
        Redux Toolkit
      </Link>
      <Link className={`${navStyle} p-1 m-1`} to={'/thunk'}>
        Thunk
      </Link>
      <Link className={`${navStyle} p-1 m-1`} to={'/saga'}>
        Saga
      </Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;

const navStyle = style({ color: 'white' });
