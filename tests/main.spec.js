import Chai, { expect } from 'Chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlayLists } from '../src/main.js';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
Chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch')

describe('spotify wrepper', () => {
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
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub = fetchedStub.callsFake(new Promise((resolve, reject) => {
        return resolve();
      })
      );

    });

    afterEach(() => {
      fetchedStub.restore();
    });

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
  });
});
