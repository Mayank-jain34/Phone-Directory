import React from 'react';
import ContactListRT from './ContactList.rt';
import {  browserHistory } from 'react-router';
import Store from './store/store';

class ContactList extends React.Component {
  constructor() {
    super();
    this.state =  {
      contacts: []
    };
  }
  componentDidMount() {
    this.setState({contacts : Store.getContacts()});
  }
  _goToContactDetails(id) {
    browserHistory.push(`/contact/${id}`);
  }
  render() {
    return ContactListRT.apply(this);
  }
};

export default ContactList;
