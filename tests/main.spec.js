import  { expect } from 'Chai';
import { search, searchAlbuns, searchArtists, searchTracks, searchPlayLists } from '../src/main.js';

describe('spotify wrepper' , () => {
    discribe('smoke tests', () =>{
        //search generico que pode buscar por mais de um tipo
        //search albuns
        //search artistes
        //search tracks
        //search play lists

        it ('should exist the search method', () =>{
            expect(search).to.exist;
        });

        it ('should exist the searchAlbuns method', () =>{
            expect(searchAlbuns).to.exist;
        });

        it ('should exist the searchArtists method', () =>{
            expect(searchArtists).to.exist;
        });

        it ('should exist the searchTracks method', () =>{
            expect(searchTracks).to.exist;
        });
        it ('should exist the searchPlayLists method', () =>{
            expect(searchPlayLists).to.exist;
        });
    });
});