import { authenticate } from './config/database';
const testconnection = require('./store-module/testConnection');

authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.error('Unable to connect to the database:', err));