import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { searchMovieApi } from 'utils/MovieApi';

const SearchMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);

  const SearchingMovie = e => {
    e.preventDefault();
    searchMovieApi(movieName).then(data => setMovieList(data));
  };

  const changeInput = e => {
    setMovieName(e.target.value);
  };

  return (
    <>
      <form onSubmit={SearchingMovie}>
        <input type="text" value={movieName} onChange={changeInput} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movieList} />
    </>
  );
};

export default SearchMovie;
