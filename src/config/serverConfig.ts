import dotenv from "dotenv";

dotenv.config();
const serverConfig = {
  PORT: process.env.PORT || 4001,
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
};


export default serverConfig;