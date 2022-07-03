import { createContext, useContext, useState } from 'react';
import { getProducts as getProductsReq } from '../api/products';

const productsContext = createContext();

export const useProductsContext = () => useContext(productsContext);

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    setProducts(null);

    try {
      const { data: products } = await getProductsReq();
      setProducts(products);
    } catch (err) {
      setError(err.message ?? 'Unexpected error');
    }

    setLoading(false);
  };

  return (
    <productsContext.Provider
      value={{
        loading,
        error,
        products,
        getProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
