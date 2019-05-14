import './App.css';
import React, { Component } from 'react'
import axios from 'axios';
import Favicon from 'react-favicon';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        celebrities:[]
      };
    }
    hoverOn() {
      console.log('hoverOn')
      this.setState({
          hoverOn:true
      })
  }
    hoverOff() {
      console.log('hoverOff')
      this.setState({
          hoverOn: false
      })
  }

    render() {
      return (
        
        // <div className="All">
        <div className="App">
        <h1>Movie Celebrities</h1>
        <input type="text" placeholder="Search for a Celeb"></input>
      
      {this.state.celebrities.map(celebrities => 
      <ul key={celebrities.id}><img src={"https://image.tmdb.org/t/p/w185"
      +celebrities.profile_path} alt="profile"/>
      {celebrities.name}
      </ul>)}
        
        
        {/* if (!this.hover.hoverOn) { }
        return <img onClick={()=>this.turnOn()}  />
    }
    else {
        return <img onClick={()=>this.turnOff()} />
} */}
      </div>
    // </div>
    )
  }



  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/person/popular?page=5&api_key=d7d00236f3a0891b3c07fd98f6f189cd')
      .then((res) => { 
        // console.log(res.data.results)      
        this.setState({celebrities:res.data.results});
      })
    }
}

ReactDOM.render(
  <div>
    <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
  </div>
, document.getElementById('root'));