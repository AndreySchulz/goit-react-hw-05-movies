import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Navi = lazy(() => import('./Nivi/Navi'));
const Home = lazy(() => import('Pages/Home'));
const Cast = lazy(() => import('Pages/Cast'));
const Reviews = lazy(() => import('Pages/Reviews'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const SearchMovie = lazy(() => import('Pages/SearchMovie'));

const MainLayout = () => {
  return (
    <>
      <Navi />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
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
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="trending" />
      </Route>
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}
