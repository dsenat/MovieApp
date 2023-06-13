//  my api key for movie requests
const apiKey = "70dc011a61f22addf07359f0c74e48b5";

// Fetch trending movies from api
export const fetchTrendingMovies = () => {
  // the URL with the API key for fetching trending movies
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  
  //  Perform a fetch request to the API 
  //  Parse the response JSON
  //  Extract the results array from the response data
  //  Return the results array, which contains the trending movies
  return fetch(url)
    .then(res => res.json())
    .then((data) => data.results);
};

  // Fetch the movie trailers
export const fetchMovieTrailer = (movieId) => {

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
  
  //  Perform a fetch request to the API URL
  //  Parse the response JSON
  // Check if the response has any trailer results
  // Filter the results to find the trailer with the type "Trailer"
  //  Extract the trailer key from the filtered trailer result
  //  Return an object with the trailer key, or return null if no trailer is found
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const trailerKey = data.results.filter((result) => result.type === "Trailer")[0].key;
        return { key: trailerKey };
      } else {
        return null;
      }
    });
};

