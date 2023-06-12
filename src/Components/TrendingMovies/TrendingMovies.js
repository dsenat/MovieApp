import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const TrendingMovies = ({ movies }) => {
  return (
    <div className="movie-section">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TrendingMovies;