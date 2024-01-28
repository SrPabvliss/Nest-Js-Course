export const env_config = () =>({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGO_DB,
  port: process.env.PORT || 3001,
})