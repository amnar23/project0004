import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div><p><i>Let's Start</i></p><br></br><App age={22}></App></div>,
  document.getElementById('root')
);
ReactDOM.render(
  <App2 name="Amna" smile=":)"></App2>,
  document.getElementById('root1')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
