import React, { useState, useEffect } from "react";
import { fetchTrendingMovies, searchMovies, fetchMovieTrailer } from './Components/api/tmdbapi';
import MovieCard from './Components/MovieCard/MovieCard';
import './App.css';


function App() {
  // Set up state variables using the useState hook
   const apiKey = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]); // State variable to store movies
  const [searchQuery, setSearchQuery] = useState(''); // State variable to store search query
  const [searchResults, setSearchResults] = useState([]); // State variable to store search results

  // Fetch trending movies on component using the useEffect hook
  useEffect(() => {
    const fetchMovies = async () => {
      // Fetch trending movies using the fetchTrendingMovies function
      const movies = await fetchTrendingMovies();// pause & wait for fetch to complete promises to resolve
      //  update state of fetched movies and re-render
      setMovies(movies);
    };

    fetchMovies(); // Call the fetchMovies function
  }, [movies]); // Trigger the effect whenever the movies state changes

  // Fetch movies by search 
  const fetchMoviesByQuery = async (query) => {
    //   fetch request to the search API with the query and API key
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`);
    //  Parse the response JSON
    const data = await res.json();
    // Return the search results
    return data.results;
  };

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery !== '') {
      // Perform a fetch request to the search API with the search query and API key
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`)
        .then((res) => res.json()) 
        .then((data) => {
          // Set the search results to the 'searchResults' state using setSearchResults
          setSearchResults(data.results);
        });
    }
  };

  return (
    <div className="app-container">
      <h1>Movies Galore</h1>
      {/* Search form */}
      <form onSubmit={handleSearch}>
        {/* Input field for search query */}
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Movies" />
        {/* Submit button */}
        <button type="submit">Search</button>
      </form>
      {/* Movie grid */}
      <div className="movie-grid">
        {/* Render search results */}
        {searchResults.map((movie, index) => (
          <MovieCard movie={movie} key={`search-${index}`} />
          ))}
        {/* Render trending movies */}
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
}

export default App;
