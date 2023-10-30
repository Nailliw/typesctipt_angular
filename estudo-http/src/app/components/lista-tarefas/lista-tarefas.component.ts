import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  constructor(
    private tarefaService: TarefaService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe({
      next: (value) => {
        this.tarefas = value;
        console.log(this.tarefas)
      },
    })
  }
  onSubmit(id: number) {
    this.tarefaService.deletarTarefa(id).subscribe({
      next: () => this.tarefaService.getTarefas().subscribe({
        next: (tarefas) => this.tarefas = tarefas
      }),
      error: (err) => alert("Ocorreu um erro")
    });
  }
}
