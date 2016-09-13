import React from 'react';
import helloRT from './hello.rt';
class hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.params.id);
    return helloRT();
  }
};
export default hello;
