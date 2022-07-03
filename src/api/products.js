import apiClient from './_client';

export const getProducts = async () => {
  try {
    return await apiClient.get('/products');
  } catch (e) {
    // This could include some additional pre-processing.
    throw e;
  }
};

export const getProduct = async (id) => {
  try {
    return await apiClient.get(`/products/${id}`);
  } catch (e) {
    // This could include some additional pre-processing.
    throw e;
  }
};
