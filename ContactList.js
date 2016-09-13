import React from 'react';
import ContactListRT from './ContactList.rt';
import {
  browserHistory
}
from 'react-router';
var ContactList = React.createClass({
  getInitialState: function() {
    return {
      contacts: [{
        id: 1,
        name: "A1",
        phoneNo: "1234567890"
      }, {
        id: 2,
        name: "A2",
        phoneNo: "1234567890"
      }, {
        id: 3,
        name: "A3",
        phoneNo: "1234567890"
      }]
    };
  },
  _goToContactDetails: function(id) {
    console.log(id);
    browserHistory.push(`/contact/${id}`);
  },
  render: ContactListRT
});

export default ContactList;
