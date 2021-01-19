import React from 'react';

function    Search (props) {
    return (
        <div className="search-wrap">
            <input type="text" className = "search"  placeholder="Search for movies" 
            onChange = {props.handleInput}
            onKeyPress = {props.search}
            />
        </div>
    );
}

export default Search;