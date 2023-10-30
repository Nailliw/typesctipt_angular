import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTarefaComponent } from './components/add-tarefa/add-tarefa.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { EditarTarefasComponent } from './components/editar-tarefas/editar-tarefas.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTarefaComponent,
    ListaTarefasComponent,
    EditarTarefasComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
