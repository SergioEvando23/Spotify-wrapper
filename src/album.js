/* global fetch */

import { API_URL } from './config';

import { toJSON } from './utils';

export const getAlbum = (id) => fetch(`${API_URL}/${id}`).then(toJSON);

export const getAlbums = (ids) => fetch(`${API_URL}/?ids=${ids}`).then(toJSON);

export const getAlbumTracks = (id) => fetch(`${API_URL}/${id}/tracks`).then(toJSON);
