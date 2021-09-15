import {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



class Main extends Component {

  render() {
    const beast = this.props.beastObjects;
    return (
      <Container fluid>
      <h1>{this.props.message}</h1>
      <Row>
        <BeastImage renderBeast={beast[0]}/>
        <BeastImage renderBeast={beast[1]}/>
        <BeastImage renderBeast={beast[2]}/>
      </Row>
      <Row>
        <BeastImage renderBeast={beast[3]}/>
        <BeastImage renderBeast={beast[4]}/>
        <BeastImage renderBeast={beast[5]}/>
      </Row>
    </Container>
    );  
  }
}

class BeastImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      heart:"💔"
    }
  }

  handleClick = (event) => {
    this.setState({
      votes: this.state.votes + 1,
      heart: "❤️"
    })
  }

  render() {
    return (
    <Col> 
      <Card style={{ width: '20rem' }}>
      <Card.Img onClick={this.handleClick} variant="top" src={this.props.renderBeast.image_url} />
      <Card.Body>
        <Card.Title> {this.state.heart} {this.state.votes}</Card.Title>
        <Card.Title>{this.props.renderBeast.keyword}</Card.Title>
        <Card.Text>{this.props.renderBeast.description}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    )
  }
};








export default Main;