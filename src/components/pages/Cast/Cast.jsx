import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../../services/moviesApi';
import style from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  // console.log(credits);

  useEffect(() => {
    moviesApi.getMovieCredits(movieId).then(res => {
      setCredits(res.cast);
    });
  }, [movieId]);
  return (
    <>
      {credits && (
        <ul className={style.list}>
          {credits.map(credit => (
            <li key={credit.id}>
              <img
                src={
                  'https://image.tmdb.org/t/p/w300' + credit.profile_path ||
                  'https://meblibud.com.ua/upload/iblock/5c8/l5prersw1bmvltnwc37uzmih0d1fhe6f.jpg'
                }
                alt={credit.original_name}
                className={style.img}
              />
              <h6 className={style.name}>{credit.original_name}</h6>
              <p className={style.character}>Character: {credit.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
