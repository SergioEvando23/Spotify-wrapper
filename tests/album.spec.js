import Chai, { expect } from 'Chai';
import { getAlbum, getAlbumTracks } from '../src/album.js';
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

    it('should have getAlbumTracks method', () => {
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
        it('should return the correct data form Promise', () => {
          promise.resolves({ album: 'name' });
          const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
          expect(album.resolveValue).to.be.eql({ album: 'name' });
        }); */
  });

});
