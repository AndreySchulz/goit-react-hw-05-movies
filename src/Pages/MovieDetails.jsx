import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { searchMovieToIdApi } from '../utils/MovieApi';
const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  // const movieInfo = searchMovieToIdApi(movieId);
  useEffect(() => {
    searchMovieToIdApi(movieId).then(data => setDetails(data));
  }, [movieId]);
  console.log(details);
  return (
    <>
      <h1>{movieId}</h1>

      <h2>Ganres</h2>

      <Outlet />
    </>
  );
};

export default MovieDetails;
