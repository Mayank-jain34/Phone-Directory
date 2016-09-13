import React , {Component} from 'react';
import { Navbar,Grid } from 'react-bootstrap';

class Main extends Component {
  render() {

    return (
      <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>Phone Directory</Navbar.Brand>
              </Navbar.Header>
          </Navbar>
          <Grid>
            {this.props.children}
          </Grid>
          <Navbar inverse fixedBottom = {true}>
            <Navbar.Header>
            </Navbar.Header>
          </Navbar>
      </div>
    );
  }
}

export default Main;
