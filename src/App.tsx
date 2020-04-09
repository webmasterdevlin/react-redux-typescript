import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { style } from "typestyle";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar bg="dark" expand="lg">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className={navStyle} to={"heroes"}>
                  Heroes
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={navStyle} to={"villains"}>
                  Villains
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <div className={"container"}>
            <Router />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
};

const navStyle = style({ color: "white" });

export default App;
