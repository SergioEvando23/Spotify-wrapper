import express from 'express';

import {
  search,
  searchArtists,
  searchAlbums,
  searchPlayLists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('');
});

export default app;

module.exports = {
  search,
  searchArtists,
  searchAlbums,
  searchPlayLists,
  getAlbum,
  getAlbums,
  getAlbumTracks,
};
