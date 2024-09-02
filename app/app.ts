import { NegociacaoController } from './controllers/NegociacaoController.js';
import { NegociacoesView } from './views/NegociacoesView.js';
import { View } from './views/View.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

// const view  = new View('#negociacoesView');
// view.update("xuxa")

// const negociacoesView = new  NegociacoesView;

// const template = negociacoesView.template();

// console.log(template)