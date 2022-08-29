const KEY = '221de49ae912fc3b0caf9f1af19aa124';
const BASE_URL = 'https://api.themoviedb.org/3';


export function getTrending() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}

export function getSearchMovies(searchQuery) {
  return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}


export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}

export function getMovieCredits(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}

export function getMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}