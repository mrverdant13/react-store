import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const expiry = useMemo(() => {
    const secs = Math.floor(Math.random() * (1 * 60));
    const time = new Date();
    time.setSeconds(time.getSeconds() + secs);
    return time;
  }, []);
  const { seconds: secs, isRunning } = useTimer({ expiryTimestamp: expiry });
  return (
    <div
      key={product.id}
      onClick={isRunning ? () => navigate(`/detalle/${product.id}`) : null}
    >
      <h3>{product.title}</h3>
      <p>{`${secs}`.padStart(2, '0')}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
