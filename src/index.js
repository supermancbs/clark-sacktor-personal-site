import App from './App';

// Import CSS
import './index.css';

// Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import React Router
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>,
  document.getElementById('root')
);
