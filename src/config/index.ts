import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: `.env.${env}`,
});

const config = {
  env,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
};

export default config;
