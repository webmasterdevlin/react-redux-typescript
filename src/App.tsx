import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import {Provider} from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Router />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
