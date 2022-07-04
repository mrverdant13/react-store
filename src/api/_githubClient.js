import axios from 'axios';

const githubClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default githubClient;
