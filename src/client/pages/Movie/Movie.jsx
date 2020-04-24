import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as apiRoutes from '../../apiRoutes';


const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const uri = `${apiRoutes.getMovie}/${movieId}`;
    fetch(uri)
      .then(res => res.json())
      .then(res => setMovie(res));
  }, [apiRoutes, movieId]);

  return (<>{movie && movie.title}</>);
};

export default Movie;
