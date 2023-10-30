import { Component } from '@angular/core';
import { SorteioService } from 'src/app/services/sorteio.service';

@Component({
  selector: 'app-sorteio-pessoas',
  templateUrl: './sorteio-pessoas.component.html',
  styleUrls: ['./sorteio-pessoas.component.css']
})
export class SorteioPessoasComponent {
  texto: string = '';
  constructor(private sorteioService: SorteioService) { }

  sortear() {
    const nomes: string[] = this.texto.split("\n");
    const sorteado = this.sorteioService.sorter(nomes);

    if (sorteado) {
      alert(`O nome sorteadofoi: ${sorteado}`)
    } else {
      alert("Digite os nomes do campo!")
    }
  }

}
