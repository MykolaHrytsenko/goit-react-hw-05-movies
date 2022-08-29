import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import style from './Movies.module.css';

import * as moviesApi from '../../../services/moviesApi';
import SearchForm from 'components/SearchForm/SearchForm';

function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearcMovies] = useState([]);

  const movieQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    moviesApi.getSearchMovies(movieQuery).then(res => {
      setSearcMovies([...res.results]);
    });
  }, [movieQuery]);

  const searchFormSubmit = newSearchQuery => {
    if (movieQuery !== newSearchQuery) {
      setSearcMovies([]);
      setSearchParams({ query: `${newSearchQuery}` });
    }
  };
  return (
    <>
      <SearchForm onSubmit={searchFormSubmit} query={movieQuery} />
      {searchMovies && (
        <ul className={style.list}>
          {searchMovies.map(movie => (
            <li key={movie.id} className={style.link}>
              <NavLink
                to={`${movie.id}`}
                state={{ from: location }}
                className={style.movie_title}
              >
                <img
                  src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                  alt={movie.original_title}
                  className={style.img}
                />
                <p className={style.movie_titleaa}> {movie.original_title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchMovies;
