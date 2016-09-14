import React from 'react';
import ContactInfoRT from './ContactInfo.rt';
import Store from './store/store';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this._updatePhoneNo = this._updatePhoneNo.bind(this);
    this._updateContact = this._updateContact.bind(this);
    this.state = {
      updateState : {
        phoneNo : false
      },
      contact : {}
    };
  }
  componentDidMount() {
    var id = this.props.params.id;
    this.setState({contact : Store.getContactById(id)});
  }
  _updatePhoneNo(e) {
    var updatedContact = Object.assign(this.state.contact,{phoneNo : e.target.value});
    this.setState({contact : updatedContact});
  }
  _updateContact() {
    Store.updateContact(this.state.contact);
   this.setState({
      updateState : {
        phoneNo : false
      }
    });
  }
  render() {
    return ContactInfoRT.apply(this);
  }
}

export default ContactInfo;
