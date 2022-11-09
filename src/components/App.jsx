import MovieDetails from '../Pages/MovieDetails';
import SearchMovie from 'Pages/SearchMovie';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navi from './Nivi/Navi';
import Home from 'Pages/Home';

const MainLayout = () => {
  return (
    <>
      <Navi />
      <Outlet />
    </>
  );
};

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovie />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" />
          <Route path="reviews" />
        </Route>
        <Route path="trending" />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
