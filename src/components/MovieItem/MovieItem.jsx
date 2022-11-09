import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { id, title } = movie;

  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
export default MovieItem;
