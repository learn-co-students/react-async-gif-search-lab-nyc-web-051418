import React, { Component } from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends Component {
  state = {
    gifs: [],
  }

  handleSearchInput = (formState) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${formState.searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => (data.data.slice(0, 3)))
    .then(data => this.setState({
      gifs: data,
    }, () => console.log(this.state)))
  }

  render() {
    return (
      <div>
        <GifSearch searchInput={this.handleSearchInput}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
