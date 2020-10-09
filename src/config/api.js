import axios from 'axios';

export default axios.create({
  baseURL: 'https://my.api.mockaroo.com/',
  timeout: 1000,
});
