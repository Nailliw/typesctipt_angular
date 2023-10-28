import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DiretivasComponent } from './exemplos/diretivas/diretivas.component';
import { TpipesComponent } from './exemplos/tpipes/tpipes.component';
import { Exercicios1Component } from './exercicios/exercicios1/exercicios1.component';
import { Exercicios2Component } from './exercicios/exercicios2/exercicios2.component';
import { FooterComponent } from './footer/footer.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OcultarTextoPipe } from './pipes/ocultar-texto.pipe';
import { ProdutoComponent } from './produto/produto.component';
import { LimiteTextoPipe } from './pipes/limite-texto.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ListaProdutosComponent,
    ProdutoComponent,
    FooterComponent,
    Exercicios1Component,
    DiretivasComponent,
    Exercicios2Component,
    TpipesComponent,
    OcultarTextoPipe,
    LimiteTextoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
