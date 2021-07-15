// We can create schemas for validating request body,header,params,query...

const Joi = require('joi');

// exports.idRequired = Joi.object({
//   id: Joi.string().required(),
// });

exports.postSingleBody = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string(),
});
