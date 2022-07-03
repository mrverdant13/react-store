import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Product = lazy(() => import('./pages/Product'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPagePlaceholder />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function LoadingPagePlaceholder() {
  return <h1>Loading...</h1>;
}

export default App;
