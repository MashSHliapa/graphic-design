import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:8035',
  timeout: 3000,
})
