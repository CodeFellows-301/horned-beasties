import {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


class Footer extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="">{this.props.title}</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
};

export default Footer;