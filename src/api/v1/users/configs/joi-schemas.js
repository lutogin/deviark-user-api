const Joi = require('@hapi/joi');

module.exports.name = Joi
  .string()
  .min(3)
  .max(30)
  .required();

module.exports.email = Joi
  .string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'ru'] } })
  .required();

module.exports.password = Joi
  .string()
  .pattern(/^.{4,30}$/)
  .required();
