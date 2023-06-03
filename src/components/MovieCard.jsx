import React from "react";

function MovieCard(props) {

    const {
        Poster, 
        Title,
        Year,
        Type,
    } = props

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} alt="poster"/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}
                <i className="material-icons right">{Year}, {Type}</i>
                </span>
            </div>
        </div>
        
    )

}

export default MovieCard