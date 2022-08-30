import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';
import style from './MoviesView.module.css';

function MoviesView() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getTrending().then(res => {
      setMovies([...res.results]);
    });
  }, []);

  return (
    <>
      <h1 className={style.title}> Trending today</h1>
      {movies && (
        <ul className={style.list}>
          {movies.map(movie => (
            <li key={movie.id} className={style.link}>
              <NavLink
                to={`movies/${movie.id}`}
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
      ;
    </>
  );
}

export default MoviesView;
