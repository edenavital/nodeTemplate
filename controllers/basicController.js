const { getMongoDb } = require('../utils/mongodb');
const { MONGODB } = require('../constans');
const catchAsync = require('../utils/catchAsync');

exports.getAll = catchAsync(async (req, res) => {
  const db = getMongoDb();

  const data = await db.collection(MONGODB.DEFAULT_COLLECTION).find().toArray();
  return res.status(200).json({
    status: 'success',
    data,
  });
});

exports.postSingle = catchAsync(async (req, res) => {
  const db = getMongoDb();

  const payload = {
    ...req.body,
    createdAt: Date.now(),
  };

  const newDoc = await db
    .collection(MONGODB.DEFAULT_COLLECTION)
    .insertOne(payload);

  return res.status(201).json({
    status: 'success',
    data: {
      newDoc,
    },
  });
});
