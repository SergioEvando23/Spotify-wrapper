"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _search = require("./search");

var _album = require("./album");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 3000;
app.listen(port, function () {
  console.log("Started on port ".concat(port));
});
app.get('/', function (req, res) {
  res.send('');
});
var _default = app;
exports.default = _default;
module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchPlayLists: _search.searchPlayLists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};