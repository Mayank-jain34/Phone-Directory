import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Main from "./Main";
import Hello from "./hello";
const routes = {
  path: '/',
  component: Main,
  indexRoute: { component: Hello }
};

ReactDOM.render(<Router history ={browserHistory} routes = {routes}/>,document.getElementById('root'));
