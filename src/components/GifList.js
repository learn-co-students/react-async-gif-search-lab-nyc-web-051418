import React from 'react';

const GifList = (props) => {

    function display() {
        return (
            props.gifs.map( gif => <li key={gif.id} > <img src={gif.images.fixed_height.url} alt={gif.slug}/> </li>)
        )
    }
    

    return (
        <ul>
            {display()}
        </ul>
    );
};

export default GifList;