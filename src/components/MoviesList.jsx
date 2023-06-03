import React from "react";
import MovieCard from "./MovieCard";

function MoviesList(props) {

    const {movies = []} = props

    return (
        <div className="movies">
            {movies.length ? movies.map(card => (
                <MovieCard key={card.imdbID} {...card}></MovieCard>
            )) : <h3>Ничего не найдено...</h3>}
        </div>
    )
}

export default MoviesList