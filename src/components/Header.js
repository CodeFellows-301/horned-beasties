import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import BeastForm from './Form'


class Header extends Component {





  render() {
    return(
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="">{this.props.title}</Navbar.Brand>
    <BeastForm form={this.props.form} />
    </Container>
  </Navbar>
    )
  }
};


export default Header;