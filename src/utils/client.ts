import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8011',
  timeout: 3000,
});
