import { NavLink } from 'react-router-dom';

const Navi = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="movies">Movies</NavLink>
      </li>
    </ul>
  );
};
export default Navi;
