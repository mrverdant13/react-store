import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

import './ProductCard.css';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const expiry = useMemo(() => {
    const secs = Math.floor(Math.random() * (1 * 60));
    const time = new Date();
    time.setSeconds(time.getSeconds() + secs);
    return time;
  }, []);
  const { seconds: secs, isRunning } = useTimer({ expiryTimestamp: expiry });
  const enabled = isRunning;
  return (
    <div
      className={`product-card ${enabled && 'enabled-product-card'}`}
      role={enabled ? 'button' : 'none'}
      onClick={enabled ? () => navigate(`/detalle/${product.id}`) : null}
    >
      <img
        src={product.image}
        alt={product.title}
        title={product.title}
        className={`product-item-image ${
          enabled
            ? 'product-item-image-available'
            : 'product-item-image-unavailable'
        }`}
      />
      <h4
        className={`product-name ${
          enabled ? 'product-name-available' : 'product-name-unavailable'
        }`}
      >
        {product.title}
      </h4>
      {enabled && (
        <p className="product-availability-label">
          {`Available ${secs}`.padStart(2, '0')}
        </p>
      )}
    </div>
  );
}
