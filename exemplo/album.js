global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main.js';

const albuns = searchAlbums('incubos');

albuns.then(data => console.log(data));
