import {Component} from 'react'

class Main extends Component{
render() {
  return (
  <>
  <HornedBeast title={'Rhino'} imageURL={'https://m.media-amazon.com/images/M/MV5BYjMxYTZiODMtNzNiMC00ZmNmLWI4MDctOWUzMjIxNWU1ODIxXkEyXkFqcGdeQXVyMzEyMjE2NzA@._V1_.jpg'} description={'One of the members of the dreaded Spiderman gang known as "The Boys"'}/>
  <HornedBeast title={'HellBoy'} imageURL={'https://imgs.abduzeedo.com/files/articles/hellboy-post/Hellboy_color_by_JPR04.jpg'} description={"Im fireproof. You're not."}/>
  </>
  )
}
};

class HornedBeast extends Component {
  render() {
    return (
    <> 
      <h2>Fear the mighty {this.props.title} </h2>
      <img src={this.props.imageURL} alt='rhino' title="Im Rhino. I knock thing's down. That's what I do. That's who I am."></img>
      <p>{this.props.description}</p>
    </>
    )
  }
};




export default Main;