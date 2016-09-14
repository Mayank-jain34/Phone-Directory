import React , {Component} from 'react';
import { Navbar,Grid } from 'react-bootstrap';
import {browserHistory} from 'react-router';
class Main extends Component {
  constructor() {
    super();
    this._goToHome = this._goToHome.bind(this);
  }
  _goToHome() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand onClick={this._goToHome}>Phone Directory</Navbar.Brand>
              </Navbar.Header>
          </Navbar>
          <Grid>
            {this.props.children}
          </Grid>
          <Navbar inverse fixedBottom = {true}>
          </Navbar>
      </div>
    );
  }
}

export default Main;
