import React, { Component } from 'react';
import UUID from "uuid"
 export default class GifList extends Component {

listGifs = () => {

  return this.props.gifs.map(gif => {
return(
<div className="col-4" key={UUID()}> <img className="card-img-top" src = {`https://media3.giphy.com/media/${gif.id}/giphy.gif`} alt="i am a gif" width="400" height="242"/></div>
)
  })
}
 render() {

return (
<div className="container">
<div className="row" >
{this.listGifs()}
</div>
</div>
)
 }
 }
