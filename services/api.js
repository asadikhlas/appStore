import axios from 'axios';
import { Path } from '../config';
const headers = {
  authorization: 'Bearer {token}'
};

const login = async (opts) => {
  if (!Object.keys(opts).length) return false;

  const { data } = await axios.post(Path.LOGIN, opts, { headers });
  return data;
};

export { login };
