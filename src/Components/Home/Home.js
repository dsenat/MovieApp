import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, fetchMovieTrailer } from '../api/tmdbapi';

const Home = () => {
  const [movies, setMovies] = useState([]); // State variable to store movies

  useEffect(() => {
    // Fetch trending movies 
    const fetchMovies = async () => {
      // Fetch trending movies from the API
      const trendingMovies = await fetchTrendingMovies();
      //  Set the fetched movies to the 'movies' state
      setMovies(trendingMovies);
    };
  

    fetchMovies(); // Call the fetchMovies function
  }, []);
}

  const fetchMovieTrailer = (movieId) => {
    const apiKey = "70dc011a61f22addf07359f0c74e48b5";
    // Construct the API URL with the movieId and API key
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
    // fetch request to the url
    fetch(apiUrl)
      .then(response => response.json()) //  Parse the response JSON
      .then(data => {
        
        console.log(data.results);
      });
  };

export default Home