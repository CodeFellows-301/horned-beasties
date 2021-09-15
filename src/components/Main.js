import {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



class Main extends Component {

  render() {
    const beast = this.props.beastObjects;
    return (
      <Container fluid>
      <h1>{this.props.message}</h1>
      <Row>
        <Col><BeastImage renderBeast={beast[0]}/></Col>
        <Col><BeastImage renderBeast={beast[1]}/></Col>
        <Col><BeastImage renderBeast={beast[2]}/></Col>
      </Row>
      <Row>
        <Col><BeastImage renderBeast={beast[3]}/></Col>
        <Col><BeastImage renderBeast={beast[4]}/></Col>
        <Col><BeastImage renderBeast={beast[5]}/></Col>
      </Row>
    </Container>
    );  
  }
}

class BeastImage extends Component {

  render() {
    return (
    <> 
      <Image src={this.props.renderBeast.image_url} alt={this.props.renderBeast.keyword} rounded fluid />
      
    </>
    )
  }
};








export default Main;