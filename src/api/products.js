import apiClient from './_client';

export const getProducts = async () => {
  try {
    return await apiClient.get('/products');
  } catch (e) {
    // This could include some additional pre-processing.
    throw e;
  }
};
