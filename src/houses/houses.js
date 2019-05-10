const axios = require('axios');

const { url } = require('../config');

const getHouses = () => axios.get(`${url}/houses`)
  .then(({ data }) => data)
  .catch(e => console.log(e));

module.exports = { getHouses };
