import React from 'react';
import ContactInfoRT from './ContactInfo.rt';
import Store from './store/store';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
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
    console.log(e.target.value);
  }
  render() {
    return ContactInfoRT.apply(this);
  }
}

export default ContactInfo;
