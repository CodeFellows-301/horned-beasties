import {Component} from 'react'
import BeastImage from './HornedBeast'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'





class Main extends Component {



  render() {
    return (
      <Container fluid>
      <h1>{this.props.message}</h1>
      <Row >
        {this.props.beastObjects.map( (beast,i) => 
           <BeastImage 
            key={'beast-' + i}
            title={beast.title}
            image={beast.image_url}
            Horn={beast.horns}
            modalClick={() => this.props.modalClick(beast)}
            />
        )};
      </Row>
    </Container>
    );  
  }
}










export default Main;