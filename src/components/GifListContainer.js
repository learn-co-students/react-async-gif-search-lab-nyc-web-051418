import React, { Component } from 'react';
//components
import GifList from "./GifList";
import GifSearch from './GifSearch';

class GifListContainer extends Component {

    state = {
        gifs: [],
        searchedTerm: "",
    }

    searchedTerm = (term) => {
        this.setState({
          searchedTerm: term,
        })
      }

    fetchF = (searchedTerm = "dolphin") => fetch(`http://api.giphy.com/v1/gifs/search?q=${searchedTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(r => r.data.slice(0,3))
    .then(r => this.setState(
        {
            gifs: r,
        }
    ))

    componentDidMount() {
        this.fetchF()
    }

    componentDidUpdate(prevProps, prevState) {
        return this.state.searchedTerm === "" ?
            null
        : 
            this.fetchF(this.state.searchedTerm)
    }

    render() {
        return (
            <div>
                <h3>Enter a Search Term</h3>
                <GifSearch searchedTerm={this.searchedTerm}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer;