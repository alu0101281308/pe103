import 'mocha';
import {expect} from 'chai';
import {Lifo} from '../src/lifo';

describe('ejercicio 1', () => {

    let pilalifo = new Lifo([1,2,3,4,5,"hola"]);

    it('pilalifo es una instancia de Lifo', () => {
        expect(pilalifo instanceof Lifo).to.be.equal(true);
    });

    it('El metodo pseek() devuelve hola', () => {
        expect(pilalifo.pseek()).to.be.equal('hola');
    });

    it('El metodo push(6) agrega un 6 a la pila', () => {
        pilalifo.push(6);
        expect(pilalifo.pseek()).to.be.equal(6);
    });

    it('El metodo pop() extrae el ultimo valor de la pila', () => {
        expect(pilalifo.pop()).to.be.equal(6);
    });

    it('El metodo size() muestra el tamaño de la pila', () => {
        expect(pilalifo.size()).to.be.equal(6);
    });

    it('El metodo print() muestra la pila', () => {
        expect(pilalifo.print()).to.deep.equal([1,2,3,4,5,'hola']);
    });

});