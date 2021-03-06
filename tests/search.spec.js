import Chai, { expect } from 'Chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlayLists } from '../src/search.js';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
Chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch')

describe('Search', () => {

  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.returns(Promise.resolve({ json: () => 'resolved' }));
    // fetchedStub.returns(Promise.reject({ error: 'error' }));
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    //search generico que pode buscar por mais de um tipo
    //search albuns
    //search artistes
    //search tracks
    //search play lists

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchPlayLists method', () => {
      expect(searchPlayLists).to.exist;
    });
  });

  describe('Generic Search', () => {


    it('should call fetch function', () => {

      const artist = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should recive the correct url to fetch', () => {

      context('pass one type', () => {
        const artist = search('Incubos', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=artist')

        const albums = search('Incubos', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=album')
      });


      context('pass more than one type', () => {
        const artistsAndAlbums = search('Incubos', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=artist,album')

      });
    });
    /*
     -------- resolver depois com eduardo --------

    it('should return the JSON data from the Promise', () => {

      const promise = fetchedStub.returns(Promise.resolve({ json: () => ({ body: 'json' }) }));
      //const promise = sinon.stub().returns(Promise.resolve({ json: () => 'resolved' }));
      promise.resolves({ json: () => ({ body: 'json' }) }); //({ body: 'json' });
      const artists = search('Incubos', 'artist');
      console.log(artists.resolveValue)
      expect(artists.resolveValue).to.be.equal({ body: 'json' });
    });
    */
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=artist');

    });

    it('should call fetch with the correct URL2', () => {

      const artists = searchArtists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');

    });
  });

  describe('searchAlbuns', () => {
    it('should call fetch function', () => {
      const albuns = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albuns = searchAlbums('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=album');

    });

    it('should call fetch with the correct URL2', () => {

      const aalbuns = searchAlbums('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');

    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=track');

    });

    it('should call fetch with the correct URL2', () => {

      const atracks = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');

    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playLists = searchPlayLists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playLists = searchPlayLists('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=playList');

    });

    it('should call fetch with the correct URL2', () => {

      const playLists = searchPlayLists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playList');

    });
  });
});

