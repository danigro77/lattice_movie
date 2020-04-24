import React, { useState, useEffect } from 'react';

import * as apiRoutes from '../../apiRoutes';
import List from '../../patterns/List';

import listColumns from './moviesList';
import './style.css'

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');

  const fetchMovies = () => {
    fetch(apiRoutes.getPopular)
      .then(res => res.json())
      .then(res => setMovies(res.results));
  };

  useEffect(() => {
    fetchMovies();
  }, [apiRoutes]);

  useEffect(() => {
    if (search.length > 0) {
      const filtered = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search);
      });
      setMovies(filtered);
    } else {
      fetchMovies();
    }
  }, [search]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <>
      <input type="text" value={search} onChange={handleChange} placeholder="Search titles" />
      <List
        data={movies}
        listConfig={listColumns}
      />
    </>
  );
};

export default Movies;
