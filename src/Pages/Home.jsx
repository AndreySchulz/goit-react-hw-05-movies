import { useEffect, useState } from 'react';

import { searchMovieTopApi } from '../utils/MovieApi';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    searchMovieTopApi().then(data => setMovie(data));
  }, []);

  return <MovieList movies={movies} />;
};

export default Home;
