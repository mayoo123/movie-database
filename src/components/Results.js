import React from 'react';
import Result from './Result'

function Results (props) {

    return(
            <section >
                <div className = "results-wrap">
                {props.results.map(result => (
                    <Result key= { result.imdbID } result = {result} popup = { props.popup } />
    ))}

</div>
            </section>
    );
}

export default Results