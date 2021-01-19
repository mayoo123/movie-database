import React from 'react'

function Popup(props) {

    return (

        <section className = "popup" >
            <div className = "content" >
                <h2> {props.selected.Title} </h2> <span > { props.selected.Year } </span>
                <p> Rating: { props.selected.Rating } </p>
                <div className = "plot" >
                    <img scr = {props.selected.Poster} alt = "poster" />
                    <p > {props.selected.Plot} </p>
                </div>
                <button onClick = { props.closePopup } >Close</button>
            </div>
        </section>
    );
}

export default Popup