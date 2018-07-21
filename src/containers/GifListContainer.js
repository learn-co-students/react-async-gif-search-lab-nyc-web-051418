import React, { Component } from 'react';
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

 export default class GifListContainer extends Component {

   constructor(){
     super()
     this.state={
       gifs:[],
       userInput: "",
       allGifs:[],
     }
   }
   componentDidMount(){
     fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g").then(r=>r.json())
     .then(
       data=>{
         const gifs = data.data
         this.setState({
           allGifs:gifs,
           gifs

         })
         })
   }

handleSearch=(event)=>{
  event.preventDefault();
  // debugger;
  console.log(this.state.allGifs)
const gifs = [...this.state.allGifs].filter(gif=>{
  return gif.title.includes(this.state.userInput)
})
this.setState({
  gifs
})
}

handleInput =(event) => {
  this.setState({
    userInput:event.target.value
  })
}
 render() {

return (
  <div>
  <GifSearch onSubmit={this.handleSearch} input={this.handleInput}/>
  <br/>
    <GifList gifs={this.state.gifs}/>
  </div>
)
 }
 }
