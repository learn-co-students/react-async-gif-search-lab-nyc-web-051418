import React, { PureComponent } from 'react';

class GifSearch extends PureComponent {
    state = {
        searchedTerm: ""
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.searchedTerm(this.state.searchedTerm)
    }

    render() {
        return (
            <input 
                type="text"
                placeholder="enter search term" 
                value={this.state.searchedTerm}
                onChange={
                    (e) => this.setState({searchedTerm: e.target.value})   
                }
            >
            </input>                
        );
    }
}



export default GifSearch;