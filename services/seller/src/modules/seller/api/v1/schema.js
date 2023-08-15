import { Joi } from 'celebrate';
export const createSellerSchema = Joi.object({
  business_name: Joi.string().required(),
  license_number: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().number().required(),
  address: Joi.string().required(),
  nic_owner: Joi.string().optional(),
});

export const updateSellerSchema = Joi.object({
  business_name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().number().optional(),
  address: Joi.string().optional(),
});
