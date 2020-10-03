import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { style } from 'typestyle';
import { configureAppStore } from './store/configureStore';
import NavigationBar from './shared/navigation-bar';

const App: React.FC = () => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <NavigationBar />
          <div className={'container'}>
            <Router />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
