import React, {useEffect, useState} from 'react';
import {fetchTrendingMovies, fetchMovieTrailer} from '../api/tmdbapi'

const Home = () => {
  const [movies, setMovies] = useState([]);
}

useEffect(() => {
  const fetchMovies = async () => {
    const trendingMovies = await fetchTrendingMovies(
      setMovies(trendingMovies)
    )
  }
})

const fetchMovieTrailer = (movieId) => {
  const apiKey = "70dc011a61f22addf07359f0c74e48b5"
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
  })
}

export default Home