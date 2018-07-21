import React, { Component } from 'react';

 export default class GifSearch extends Component {
handleInput =() => {

}

 render() {

return (
<div>
    <form onSubmit={this.props.onSubmit} style ={{padding:"50px 10px 20px 30px"}}>
    <input type="text" onChange={this.props.input}/>
    <input type="submit" value="Search" />
    </form>

    <hr/>
</div>
)
 }
 }
