import { cacheGenerator } from './tulo.js';

const version = 1.0;

const imageCacheSpec = {
  name: 'imageCache' + version,
  types: ['image'],
  urls: ['vercel.svg', 'favicon.ico'],
  strategy: 'CacheFirst',
  expiration: 60 * 60 * 1000,
};

cacheGenerator([imageCacheSpec]);
