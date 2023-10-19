import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  nomeDoProduto: string = "Produto Top";
  preco: number = 20.0;
  linkImagem: string = 'https://picsum.photos/200';
  largura: number = 50.0;
  altura: number = 50.0;


  adicionarProduto() {
    alert("O produto " + this.nomeDoProduto + " foi adicionado!");
  }
}
