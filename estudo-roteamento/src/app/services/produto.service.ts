import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      cod: 1,
      nome: "Marmita",
      descricao: "Bom para quem ama marmitas",
      preco: 20.59,
      imagem: 'https://picsum.photos/201'
    }, {
      cod: 2,
      nome: "Air Fryer",
      descricao: "Ferramenta inovadora para cozinhar com aire",
      preco: 250.59,
      imagem: 'https://picsum.photos/202'
    }, {
      cod: 3,
      nome: "Maquina de Lavar",
      descricao: "Lavagem a gosto",
      preco: 2022.59,
      imagem: 'https://picsum.photos/203'
    }, {
      cod: 4,
      nome: "Conjunto de panelas",
      descricao: "Para o seu bar ou cozinha",
      preco: 212.98,
      imagem: 'https://picsum.photos/204'
    },
  ]

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod) => prod.cod == cod)
  }
}
