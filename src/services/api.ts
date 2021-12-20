import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'X-Api-Key': 'a250f9c2-2b12-4438-9fb3-667be19fe063'
  }
})

export default api;