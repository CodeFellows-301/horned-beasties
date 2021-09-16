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
      showBeast: true,
      beast: beastObjects[0]
    }
  };
    
    modalOnClick = (beast) => {this.setState ({ 
      showBeast: true,
      beast: beast
      
    }); console.log('test')}
 

    modalOnClose = () => this.setState ({ showBeast: false })
  


  render() {
    return (
      <>
      <Header title='The Beastie Boys 🦏'/>
      <Main modalClick={this.modalOnClick} message='Beast selection' beastObjects={beastObjects}/>
      <SelectedBeast beast={this.state.beast} show={this.state.showBeast} modalClose={this.modalOnClose}/>
      <Footer title='Author: Jacob Gregor'/>
      </>
    )
  }
}


export default App;
