import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-detail',
  templateUrl: './produtos-detail.component.html',
  styleUrls: ['./produtos-detail.component.css']
})
export class ProdutosDetailComponent implements OnInit {
  produto?: Produto;
  naoEncontrado: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (value) => {
        this.produto = this.produtoService.getProduto(value["cod"]);
        this.naoEncontrado = this.produto == undefined;
      },
    })

  }

}
