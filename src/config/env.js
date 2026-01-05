require("dotenv").config();

const requiredVars = ["PORT", "DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME", "DB_PORT", "JWT_SECRET", "REDIS_HOST", "REDIS_PORT"];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

module.exports = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
};
