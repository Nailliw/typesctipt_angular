import { Component } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  isOn: boolean = false;
  counter: number = 0;

  selectedRole: string = '';


  listaCompras: string[] = [
    "Arroz", "Feijão", "Pizza"
  ]

  toggle() {
    this.isOn = !this.isOn;
  }

  aumentar() {
    this.counter += 1;
  }

  diminuir() {
    this.counter -= 1;
  }

  alunos: Aluno[] = [
    {
      nome: "Joao",
      media: 5.5,
      email: "jooj@google.com",
    },
    {
      nome: "Will",
      media: 5.8,
      email: "will@hotla.com"
    }
  ]

  alertar(aluno: Aluno) {
    alert(`Email enviado para ${aluno.email}`)
  }

  roles: any[] = [
    { id: 0, name: 'empty' },
    { id: 1, name: 'unknow' },
    { id: 2, name: 'user' },
    { id: 3, name: 'guest' },
    { id: 4, name: 'admin' },
  ]


}
