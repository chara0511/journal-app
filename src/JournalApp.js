import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import MainRouter from './routers/MainRouter';

const JournalApp = () => {
  return (
    <>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </>
  );
};

export default JournalApp;
