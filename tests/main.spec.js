import Chai, { expect } from 'Chai';
import { search, searchAlbuns, searchArtists, searchTracks, searchPlayLists } from '../src/main.js';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
Chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch')

describe('spotify wrepper', () => {
  describe('smoke tests', () => {
    //search generico que pode buscar por mais de um tipo
    //search albuns
    //search artistes
    //search tracks
    //search play lists

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
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
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
