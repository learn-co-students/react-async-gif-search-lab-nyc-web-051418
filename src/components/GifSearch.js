import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    searchInput: "",
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    }, () => console.log(this.state))
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchInput(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="searchInput">search Gifs: </label>
        <input
          type="text"
          name="seachInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
        <input type="submit"/>
      </form>
    )
  }
}

export default GifSearch;
