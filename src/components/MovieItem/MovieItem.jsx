import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { id, title } = movie;
  const location = useLocation();
  return (
    <li key={id}>
      <Link state={location} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};
export default MovieItem;
