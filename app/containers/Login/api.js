import superagent from 'superagent';
import config from 'config';

export const login = (body) =>
  superagent
    .post(`${config.api.url}/users/login`)
    .send(body)
    .then((data) => data.body);
