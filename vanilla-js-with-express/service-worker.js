import { cacheGenerator } from '/tulo';
const version = 1.0;

const pageCacheSpec = {
  name: 'pageCache'+version,
  types: ['text/html'],
  urls: ['/', '/index.html'],
  strategy: 'NetworkFirst'
}

const staticCacheSpec = {
  name: 'staticCache'+version,
  types: ['text/css'],
  urls: ['/styles.css'],
  strategy: 'CacheFirst',
  expiration: 60*1000//in miliseconds: 60*1000 = 1 minute, 20*60*1000 = 20 minutes
}

const imageCacheSpec = {
  name: 'imageCache'+version, //give your cache a name and tag on the version number
  types: ['image'], //input HTML MIME types e.g. text/html, text/css, image/gif, etc.
  urls: ['/catsnakes.png'], //input any reachable file paths to be cached that correspond to the types specific to this cacheSpec
  strategy: 'NetworkFirst' //currently supported strategies are: CacheFirst, NetworkFirst, NetworkOnly
}

cacheGenerator([pageCacheSpec, imageCacheSpec, staticCacheSpec]);//include your page/markup caches first