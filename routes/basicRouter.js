const express = require('express');
const basicController = require('../controllers/basicController');

const router = express.Router();

const validatorSchema = require('../utils/validators/schemas');
const validator = require('../utils/validators/validatorInstance');

router
  .route('/')
  .get(basicController.getAll)
  .post(
    validator.body(validatorSchema.postSingleBody),
    basicController.postSingle
  );

// router
//   .route('/:id')
//   .get(validator.params(validatorSchema.idRequired), basicController.getSingle);

module.exports = router;
