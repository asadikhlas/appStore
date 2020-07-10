import { API_URL } from 'react-native-dotenv';
const BASE_URL = API_URL || 'http://localhost:1337';

const Path = {
  LOGIN: `${BASE_URL}/auth/login`
};

export { Path };
