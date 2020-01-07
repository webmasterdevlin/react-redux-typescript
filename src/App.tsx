import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import Router from "./Router";
import {Provider} from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
            <nav style={{display: 'flex', justifyContent: "space-around"}}>
                <Link to={'heroes'}>Heroes</Link>
                <Link to={'villains'}>Villains</Link>
            </nav>
          <Router />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
