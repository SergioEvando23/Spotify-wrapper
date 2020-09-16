import Chai, { expect } from 'Chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album.js';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
Chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.returns(Promise.resolve({ json: () => 'resolved' }));
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumsTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/4aawyAB9vmqN3uQ7FjRGTk');
    });
    /*                    ------ RESOLVER COM EDUARDO ------
        it('should return the correct data from Promise', () => {
          promise.resolves({ album: 'name' });
          const albums = getAlbum(['4aawyAB9vmqN3uQ7FjRGTy']);
          expect(albums.resolveValue).to.be.eql({ album: 'name' });
*/
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');

      const albums2 = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });
    /*                    ------ RESOLVER COM EDUARDO ------
      it('should return the correct data from Promise', () => {
        promise.resolves({ album: 'name' });
        const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy, 4aawyAB9vmqN3uQ7FjRGTk']);
        expect(albums.resolveValue).to.be.eql({ album: 'name' });
      });*/
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/4aawyAB9vmqN3uQ7FjRGTy/tracks');

      const tracks2 = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/4aawyAB9vmqN3uQ7FjRGTk/tracks');
    });
  });
  /*                    ------ RESOLVER COM EDUARDO ------
      it('should return the correct data form Promise', () => {
        promise.resolves({ album: 'name' });
        const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      }); */

});


