import axios from 'axios';

const nocodb = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
  headers: {
    'xc-token': process.env.NEXT_PUBLIC_NOCODB_API_TOKEN,
  },
});

export default nocodb;
