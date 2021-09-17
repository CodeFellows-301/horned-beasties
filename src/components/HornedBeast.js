import {Component} from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class BeastImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      heart:"💔",
    }
  }

  handleClick = (event) => {
    this.setState({
      votes: this.state.votes + 1,
      heart: "❤️",
    })
    this.props.modalClick();
  }

  render() {
    return (
    <Col xs={1} sm={2} md={3} lg={4}> 
      <Card >
      <Card.Img  onClick={this.handleClick} variant="top" src={this.props.image} />
      <Card.Body>
        <Card.Title> {this.state.heart} {this.state.votes}</Card.Title>
        <Card.Title>{this.props.keyword}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    )
  }
};

export default BeastImage;