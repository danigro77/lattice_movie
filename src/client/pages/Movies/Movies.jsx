import React, { useState, useEffect } from 'react';
import * as apiRoutes from '../../../apiRoutes';


const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(apiRoutes.getPopular)
      .then(res => res.json())
      .then(res => setMovies(res));
  }, [apiRoutes]);

  return (<></>);
};

export default Movies;