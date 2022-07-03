import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div key={product.id} onClick={() => navigate(`/detalle/${product.id}`)}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
