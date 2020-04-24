import React, { useState, useEffect } from 'react';

import * as apiRoutes from '../../apiRoutes';
import List from '../../patterns/List';

import listColumns from './moviesList';


const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(apiRoutes.getPopular)
      .then(res => res.json())
      .then(res => setMovies(res.results));
  }, [apiRoutes]);

  return (
    <List
      data={movies}
      listConfig={listColumns}
    />
  );
};

export default Movies;
