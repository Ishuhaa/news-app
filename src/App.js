import React from 'react';
import './App.css';

import {Provider} from 'react-redux'

import store from './redux/store'
import Home from './pages/Home';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
