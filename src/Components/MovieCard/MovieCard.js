import React from "react";

const MovieCard = ({ movie }) => {
 
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      
       <iframe
          title={`${movie.title} Trailer`}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.trailerKey}`}
          frameBorder="0"
          allowFullScreen
        />
      
    </div>
  );
};

 

export default MovieCard;
