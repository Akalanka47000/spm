import initializeServer from '@app/server';
import config from './config';

initializeServer({
  service: 'Payment service',
  database: true,
  config,
});
