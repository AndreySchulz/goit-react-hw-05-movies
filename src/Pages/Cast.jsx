import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieCastApi } from 'utils/MovieApi';

const Cast = () => {
  const START_URL = 'https://image.tmdb.org/t/p/w500/';
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    searchMovieCastApi(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul>
      {actors.map(actor => {
        const { name, profile_path, id, character } = actor;
        return (
          <li key={id}>
            <img src={`${START_URL}${profile_path}`} alt={name} />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
