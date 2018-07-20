import React, { Component } from 'react';

class GifList extends Component {

  renderGifs = () => {
    return this.props.gifs.map(gif => {
      return (
        <li><img src={gif.images.fixed_height_still.url}/></li>
      )
    })
  }
  
  render() {
    return (
      <ul>
        GifList:
        {this.renderGifs()}
      </ul>
    )
  }
}

export default GifList;
