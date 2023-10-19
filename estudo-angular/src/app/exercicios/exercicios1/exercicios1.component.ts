import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios1',
  templateUrl: './exercicios1.component.html',
  styleUrls: ['./exercicios1.component.css']
})
export class Exercicios1Component {
  /**
   * Crie dois inputs, recebe nome e sobrenome e mostre no template;
   * Concatenação dos dois nomes;
   * As Iniciais
   * A soma do tamanho dos dois nomes
   */

  nome: string = '';
  sobrenome: string = '';
  concatenacaoNomes: string = '';
  iniciais: string = '';
  soma: number = 0;

  execute() {
    this.concatenacaoNomes = this.nome + " " + this.sobrenome;
    this.iniciais = this.nome[0] + " " + this.sobrenome[0];
    this.soma = this.nome.length + this.sobrenome.length;
  }
}
