/*                      CALCULADORA TESTES
***************************************************************************
import { expect } from 'chai';
import { assert } from 'chai';
import { sum, sub, div, mult } from '../src/main.js';
const { should } = require('chai');

 describe('calc', () => {
    //smoke testes(testes mais simples)
    describe('smoke testes', () => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            assert.typeOf(sum, 'function');
        });

        it('should exist the method `sub`', (S) => {
            expect(sub).to.exist;
            assert.typeOf(sub, 'function');
        });

        it('should exist the method `div`', () => {
            expect(div).to.exist;
            assert.typeOf(div, 'function');
        });

        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            assert.typeOf(mult, 'function');
        });
    });

    describe('sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe('sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(sub(6, 2)).to.be.equal(4);
        });

        it('should return -4 when `sub(6,10)`', () => {
            expect(sub(6, 10)).to.be.equal(-4);
        });
    });
    describe('div', () => {
        it('should return 4 when `div(8,2)`', () => {
            expect(div(8, 2)).to.be.equal(4);
        });
        it('should return `Não é possivel divisão por zero!` when divi by 0', () => {
            expect(div(4, 0)).to.be.equal('Não é possivel divisão por zero!');
        });
    });
    describe('mult', () => {
        it('should return 4 when `mult(2,2)`', () => {
            expect(mult(2, 2)).to.be.equal(4);
        });
    });
});
*************************************************************************************************
*/
import { expect } from 'chai';
import fizzBuss from '../src/main'
describe('fizzBuss', () => {
    it('should return `fizz` when multiple of 3', () => {
        expect(fizzBuss(3)).to.be.equal('fizz');
        expect(fizzBuss(6)).to.be.equal('fizz');
    });
    it('should return `buss` when multiple of 5', () => {
        expect(fizzBuss(5)).to.be.equal('Buss');
        expect(fizzBuss(10)).to.be.equal('Buss');
    });
    it('should return `fizzBuss` when multiple of 3 and 5', () => {
        expect(fizzBuss(15)).to.be.equal('fizzBuss');
    });
    it('should return the number when non-multiple', () => {
        expect(fizzBuss(7)).to.be.equal(7);
    });
    it('should return`0` when 0', () => {
        expect(fizzBuss(0)).to.be.equal(0);
    });
});
