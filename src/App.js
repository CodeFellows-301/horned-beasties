import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Component} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast'
import beastObjects from './data.json'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showBeast: false,
      beast: beastObjects[0],
      beastObjects: beastObjects
    }
  };

  handleFormSelect = (option) => {
    console.log(option)
    if(option === ''){
     this.setState({
       beastObjects: beastObjects
     })} else {
      let update = beastObjects.filter(beast => beast.horns === Number(option))
      console.log(update)
      this.setState({
        beastObjects: update
      })
    }
  };



    
    modalOnClick = (beast) => {this.setState ({ 
      showBeast: true,
      beast: beast

      
    }); 
  }
 

    modalOnClose = () => this.setState ({ showBeast: false })
  


  render() {
    return (
      <>
      <Header form={this.handleFormSelect} title='The Beastie Boys 🦏'/>
      <Main modalClick={this.modalOnClick} message='Beast selection' beastObjects={this.state.beastObjects}/>
      <SelectedBeast beast={this.state.beast} show={this.state.showBeast} modalClose={this.modalOnClose}/>
      <Footer title='Author: Jacob Gregor'/>
      </>
    )
  }
}


export default App;
