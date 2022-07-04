import githubClient from './_githubClient';

export const getProfile = async () => {
  try {
    return await githubClient.get('/users/mrverdant13');
  } catch (e) {
    // This could include some additional pre-processing.
    throw e;
  }
};
