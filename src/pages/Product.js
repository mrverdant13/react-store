import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductProvider, useProductContext } from '../context/product';
import './Product.css';

export default function Product() {
  return (
    <ProductProvider>
      <ProductContent />
    </ProductProvider>
  );
}

function ProductContent() {
  const { productId: id } = useParams();
  const productId = Number(id);
  const { loading, error, product, getProduct } = useProductContext();
  useEffect(() => {
    getProduct(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product == null) {
    return (
      <div>
        <h2>
          {loading && <>Loading...</>}
          {error && <>{error.message ?? 'Unexpected error'}</>}
          {!loading && !error && <>Product not found</>}
        </h2>
      </div>
    );
  }

  return (
    <div className="container">
      <img
        className="product-image"
        src={product.image}
        alt={product.title}
        title={product.title}
      />
      <div className="product-details">
        <h1 className="name">{product.title}</h1>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
}
