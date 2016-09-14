import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, browserHistory
}
from 'react-router';
import Main from "./Main";
//import Hello from "./hello";
import ContactList from "./ContactList";
import ContactInfo from "./ContactInfo";
const routes = {
  path: '/',
  component: Main,
  indexRoute: {
    component: ContactList
  },
  childRoutes: [{
    path: 'contact/:id',
    component: ContactInfo
  }]
};

ReactDOM.render( < Router history = {
      browserHistory
    }
    routes = {
      routes
    }
    />,document.getElementById('root'));
