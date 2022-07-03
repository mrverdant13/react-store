import { createContext, useContext, useState } from 'react';
import { getProduct as getProductReq } from '../api/products';

const productContext = createContext();

export const useProductContext = () => useContext(productContext);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const { data: product } = await getProductReq(id);
      setProduct(product);
    } catch (err) {
      setError(err.message ?? 'Unexpected error');
    }

    setLoading(false);
  };

  return (
    <productContext.Provider
      value={{
        loading,
        error,
        product,
        getProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
