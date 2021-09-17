import {Component} from 'react'
import Form from 'react-bootstrap/Form'

class BeastForm extends Component {

  constructor(props){
  super(props)
  this.state = {
    option: ''
  }
  console.log(this.state.option);
  }

  formEvent = (event) => {
    this.props.form(event.target.value);
  }


  render(){
    return(
      <Form.Select onChange={this.formEvent} aria-label="Default select example">
        <option >Horn Selector</option>
        <option  value=''>All</option>
        <option  value='1'>One</option>
        <option  value='2'>Two</option>
        <option  value='3'>Three</option>
        <option  value='100'>So Many Horns</option>
      </Form.Select>
    );
  }
}

export default BeastForm;