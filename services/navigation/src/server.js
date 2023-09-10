import initializeServer from '@app/server';
import config from './config';

initializeServer({
  service: 'Navigation service',
  database: true,
  config,
});
