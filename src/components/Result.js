import React from 'react';

function Result(props){
    return(
        <div className = "result">
            <div className = "result-info" onClick = { () => props.popup(props.result.imdbID) }>
                <img src={props.result.Poster} alt = "poster" />
                <h2> { props.result.Title } </h2>
            </div>
        </div>
    );
}

export default Result