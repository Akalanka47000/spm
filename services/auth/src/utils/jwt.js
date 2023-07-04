import jwt from 'jsonwebtoken';
import { moduleLogger } from '@sliit-foss/module-logger';
import { errors } from './constants';
import config from '../config';

const logger = moduleLogger('JWT-UTIL');

export const verify = (token, ignoreExpiry = false) => {
  try {
    const verificationMethod = ignoreExpiry ? 'decode' : 'verify';
    return jwt[verificationMethod](token, config.JWT_SECRET);
  } catch (error) {
    logger.error(`JWT-VERIFY_FAILED - ${error.message}`);
    if (error.message === 'jwt expired') {
      throw errors.token_expired;
    }
    throw errors.invalid_token;
  }
};

export const generateTokens = (user) => {
  ['password', 'created_at', 'updated_at'].forEach((key) => delete user[key]);
  const accessToken = jwt.sign(user, config.JWT_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRY,
  });
  const refreshToken = jwt.sign(
    {
      access_token: accessToken,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.REFRESH_TOKEN_EXPIRY,
    },
  );
  return { access_token: accessToken, refresh_token: refreshToken };
};
