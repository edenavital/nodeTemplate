const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const { connectMongo } = require('./mongodb');
const { initAxios } = require('./axiosInstance');

module.exports = () => {
  // Init mongodb instance - uncomment the next row in order to connect to mongodb, make sure config.env is set properly
  connectMongo();

  // Init axios instance
  initAxios();
};
