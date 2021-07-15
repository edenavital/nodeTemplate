const { MongoClient } = require('mongodb');
const { MONGODB } = require('../constans');

let db;

exports.connectMongo = () => {
  console.log('connecting to mongodb...');

  const URI = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  ).replace('<DATABASE>', process.env.DEFAULT_DATABASE);

  MongoClient.connect(URI, (err, client) => {
    if (err) {
      console.log('connection failed', err);
      throw err;
    }
    db = client.db(MONGODB.DEFAULT_DB);
    console.log('connection established');
  });
};

exports.getMongoDb = () => db;
