import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import beastObjects from './data.json'


function App() {
  return (
    <>
    <Header title='The Beastie Boys 🦏'/>
    <Main message='Beast selection' beastObjects={beastObjects}/>
    <Footer title='Author: Jacob Gregor'/>
    </>
  );
}


export default App;
