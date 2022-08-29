import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() =>
  import('./pages/Layout/Layout' /* webpackChunkName: "Layout" */)
);
const NotFoundView = lazy(() =>
  import(
    './pages/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */
  )
);
const Home = lazy(() =>
  import('./pages/Home/Home' /* webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import('./pages/Movies/Movies' /* webpackChunkName: "movies" */)
);
const MovieDetails = lazy(() =>
  import(
    './pages/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details" */
  )
);
const Cast = lazy(() =>
  import('./pages/Cast/Cast' /* webpackChunkName: "cast" */)
);

const Reviews = lazy(() =>
  import('./pages/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
