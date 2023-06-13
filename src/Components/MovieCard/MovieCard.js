import React, { useState, useRef } from "react";
import { fetchMovieTrailer } from '../api/tmdbapi';

// the MovieCard component
const MovieCard = ({ movie }) => {
  // State to store the trailer URL
  const [trailerUrl, setTrailerUrl] = useState(null);

  // Ref to store the timeout reference
  const timeoutRef = useRef(null);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    // Clear any existing timeout
    clearTimeout(timeoutRef.current);

    // Set a new timeout to fetch the movie trailer after 500 milliseconds
    timeoutRef.current = setTimeout(() => {
      // Fetch the movie trailer using the movie ID
      fetchMovieTrailer(movie.id)
        .then((trailer) => {
          // If a valid trailer is returned
          if (trailer && trailer.key) {
            // Construct the video URL with the trailer key
            const videoUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;

            // Set the trailer URL in the state
            setTrailerUrl(videoUrl);
          }
        });
    }, 500);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    // Clear the timeout
    clearTimeout(timeoutRef.current);

    // Reset the trailer URL to null
    setTrailerUrl(null);
  };

  // Render the movie card component
  return (
    <div
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* If a trailer URL exists, render the trailer */}
      {trailerUrl ? (
        <div className="trailer-container">
          <iframe
            className="movie-trailer"
            title="Movie Trailer"
            src={trailerUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        // Or render the movie poster
        <div className="poster-container">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      )}
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};


export default MovieCard;