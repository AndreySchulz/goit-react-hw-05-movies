import { usePokemonApi } from 'hooks/usePokemonApi';
import { Link, Outlet } from 'react-router-dom';

const Pokemon = () => {
  const result = usePokemonApi();

  return (
    <>
      <ul>
        {result.map(({ name }) => {
          return (
            <li key={name}>
              <Link to={`${name}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
export default Pokemon;
