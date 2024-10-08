import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement ;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView", true);
  private mensagemView = new MensagemView("#mensagemView");
  private readonly SABADO = 6;
  private readonly DOMINGO = 0;

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector("#data");
    this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
    this.inputValor = <HTMLInputElement>document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.diaUtil(negociacao.data)) {
      this.mensagemView.update(
        "Negociação não pode ser feita em finais de semana"
      );
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private diaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  // private criaNegociacao(): Negociacao {
  //   const exp = /-/g;
  //   const date = new Date(this.inputData.value.replace(exp, ","));
  //   const quantidade = parseInt(this.inputQuantidade.value);
  //   const valor = parseFloat(this.inputValor.value);
  //   return new Negociacao(date, quantidade, valor);
  // }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }
}
