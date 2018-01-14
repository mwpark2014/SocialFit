const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://<dbuser>:<dbpassword>@{mlab_url}/socialfit-db',
  port: process.env.PORT || 8000,
};

export default config;
