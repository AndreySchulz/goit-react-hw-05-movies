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
  const { title, backdrop_path, poster_path } = details;
  return (
    <>
      <h1>{title}</h1>
      <img href={poster_path}></img>

      <h2>Ganres</h2>

      <Outlet />
    </>
  );
};

export default MovieDetails;
