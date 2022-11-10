import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { searchMovieToIdApi } from '../utils/MovieApi';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const START_URL = 'https://image.tmdb.org/t/p/w500/';
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  // const movieInfo = searchMovieToIdApi(movieId);
  useEffect(() => {
    searchMovieToIdApi(movieId).then(data => setDetails(data));
  }, [movieId]);
  // console.log(details);
  const { title, poster_path, vote_average, overview, genres } = details;
  return (
    <>
      <Link to={location.state || '/'}>Go back</Link>
      <img src={`${START_URL}${poster_path}`} alt={title}></img>
      <h1>{title}</h1>
      <p>User score : {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Ganres</h2>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetails;
