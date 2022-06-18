import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
// import {store} from './Redux/index'
import {UserSlice} from './Feature/User'


const store = configureStore({
  reducer : {
    OP : UserSlice.reducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
