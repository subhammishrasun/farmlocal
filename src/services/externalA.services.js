const axios = require('axios');
const { getAccessToken } = require('./oauth.services');

async function fetchExternalA() {
  const token = await getAccessToken();

  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    timeout: 3000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}



module.exports = { fetchExternalA };
