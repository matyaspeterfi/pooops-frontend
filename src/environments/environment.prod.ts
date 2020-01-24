import { Secret } from './../../.secret';
const secret = new Secret()

export const environment = {
  agmApiKey : secret.apikey,
  hostname : secret.hostname,
  production: true
};
