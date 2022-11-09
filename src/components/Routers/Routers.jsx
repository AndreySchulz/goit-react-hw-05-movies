import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Pokemon from 'Pages/Pokemon';
import Home from 'Pages/Home';
import OnePokemonPage from 'Pages/OnePokemonPage';
import { Fragment } from 'react';

const Navi = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="pokemon">Pokemon</NavLink>
      </li>
    </ul>
  );
};

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <Navi />
            <Outlet />
          </Fragment>
        }
      >
        <Route index element={<Home />} />
        <Route path="pokemon" element={<Pokemon />}>
          <Route path=":name" element={<OnePokemonPage />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Routers;
