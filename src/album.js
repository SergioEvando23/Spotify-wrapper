export const getAlbum = id =>
  fetch(`https://api.spotify.com/v1/${id}`)
    .then(data => data.json())

export const getAlbumTracks = () => { }
