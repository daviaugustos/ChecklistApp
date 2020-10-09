import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './scenes/Home/HomeScreen';
import Store from './config/store';

export default App = () => (
  <Provider store={Store}>
    <HomeScreen />
  </Provider>
);
