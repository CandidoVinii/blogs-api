/* eslint-disable complexity */
const Joi = require('joi');
const { User } = require('../database/models');

const schema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'any.required': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'any.required': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().optional(),
  });
  
  const userValidation = async (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };

  const userVerificate = async (req, res, next) => {
    const { email } = req.body;
  
    const userValidate = await User.findOne({ where: { email } });

    if (userValidate) {
        return res.status(409).json({ message: 'User already registered' });
    }

    next();
  };
  
module.exports = { userValidation, userVerificate };  