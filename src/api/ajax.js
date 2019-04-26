const axios = require('axios');

var ajax = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default ajax;