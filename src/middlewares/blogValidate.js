const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': '"Title" is required',
  }),
  content: Joi.string().required().messages({
    'any.required': '"Content" is required',
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': '"CategoryIds" is required',
  }),
});

const postValidate = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { postValidate };