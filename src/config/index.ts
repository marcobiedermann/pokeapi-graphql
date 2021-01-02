import dotenv from 'dotenv';

const { NODE_ENV = 'development' } = process.env;

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

interface Config {
  env: string;
  port: number;
}

const config: Config = {
  env: NODE_ENV,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
};

export default config;
