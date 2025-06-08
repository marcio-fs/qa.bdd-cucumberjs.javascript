import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import Pessoa from '../../src/Pessoa.js';

let pessoa;
let resultado;

Given('a pessoa tem a idade de {int} anos', function (idade) {
    pessoa = new Pessoa();
    this.idade = idade;
});

When('verifico se a pessoa pode consumir bebida alcoólica', function () {
    resultado = pessoa.ehMaiorDeIdade(this.idade) ? 'Sim' : 'Não';
});

Then('a resposta deve ser {string}', function (respostaEsperada) {
    expect(resultado).to.equal(respostaEsperada);
});

