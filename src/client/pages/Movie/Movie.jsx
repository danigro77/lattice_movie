import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as apiRoutes from '../../apiRoutes';
import TitleValueRow from '../../patterns/TitleValueRow';
import renderedData from './renderedData';
import castData from './castData';
import './style.css';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const uri = `${apiRoutes.getMovie}/${movieId}`;
    fetch(uri)
      .then(res => res.json())
      .then((res) => {
        const {
          title,
          tagline,
          overview,
          poster_path: posterPath,
          ...rest
        } = res;
        setMovie({
          ...movie,
          title,
          tagline,
          overview,
          posterPath,
          data: renderedData(rest),
        });
      });

    fetch(`${uri}/credits`)
      .then(res => res.json())
      .then((res) => {
        setCast(castData(res.cast));
      });
  }, [apiRoutes, movieId]);

  const createImageSrc = img => `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img}`;

  if (!movie) return <div>Loading</div>;
  return (
    <>
      <h1>{movie.title}</h1>
      { movie.tagline && <h3>{movie.tagline}</h3> }
      <div className="movie-description">{movie.overview}</div>
      <div className="movie-body">
        <img src={createImageSrc(movie.posterPath)} alt={`${movie.title} poster`} />
        <div className="movie-info">
          {
            movie.data.map(info => <TitleValueRow key={info.title} {...info} />)
          }
          <h3 className="movie-cast-title">Cast</h3>
          {
            cast && cast.map(actor => <TitleValueRow
              key={actor.id}
              title={actor.name}
              value={actor.character}
            />)
          }
        </div>
      </div>
    </>
  );
};

export default Movie;
