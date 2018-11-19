const API_PATH = process.env.API || 'https://centro-203603.appspot.com';
// const API_PATH = process.env.API || 'http://localhost:3001';
const stage = process.env.STAGE || process.env.NODE_ENV || 'production';
const config = {
  api: {
    url: `${API_PATH}/api`,
    path: API_PATH,
  },
  stage,
};

export default config;
