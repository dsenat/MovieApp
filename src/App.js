import React, { useState, useEffect } from "react";
import {fetchTrendingMovies, searchMovies, fetchMovieTrailer } from './Components/api/tmdbapi';

function App() {
  const apiKey = "70dc011a61f22addf07359f0c74e48b5";
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Movies" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
