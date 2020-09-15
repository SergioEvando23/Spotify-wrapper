global.fetch = require('node-fetch');

import searchAlbums from '../src/main.js';

const albuns = searchAlbums('incubus');

albuns.then(data => console.log(data));
