import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductsProvider, useProductsContext } from '../context/products';

export default function Home() {
  return (
    <>
      <h1>Products</h1>
      <ProductsProvider>
        <HomeContent />
      </ProductsProvider>
    </>
  );
}

function HomeContent() {
  const { loading, error, products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (products == null || products.length === 0) {
    return (
      <div>
        <h2>
          {loading && <>Loading...</>}
          {error && <>{error.message ?? 'Unexpected error'}</>}
          {!loading && !error && <>No products found</>}
        </h2>
      </div>
    );
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
