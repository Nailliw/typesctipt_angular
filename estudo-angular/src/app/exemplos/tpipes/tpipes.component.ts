import { Component } from '@angular/core';

@Component({
  selector: 'app-tpipes',
  templateUrl: './tpipes.component.html',
  styleUrls: ['./tpipes.component.css']
})
export class TpipesComponent {
  hoje: Date = new Date();
  valor: number = 0.7641616;
  mensagem: string = 'Beatae, soluta, tempora, expedita suscipit quo nobis labore architecto modi sed recusandae non ipsum possimus fuga.';
  salario: number = 1500.64641;

  myInterval = setInterval(() => {
    this.hoje = new Date();
  }, 1000);


}
