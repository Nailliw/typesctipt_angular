import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {
  tarefa: Tarefa[] = [];
  id?: number;
  notFound: boolean = false;
  form: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    concluida: new FormControl(false),
  })
  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.id = Number(params['id']);
        this.tarefaService.getTarefaById(this.id).subscribe({
          next: (value) => {
            this.form.patchValue(value);
          },
          error: (err) => {
            this.notFound = true;
          }
        })
      }
    })


  }

  onSubmit() {
    const tarefa: Tarefa = { ...this.form.value, id: this.id };
    this.tarefaService.editarTarefa(tarefa, this.id!).subscribe({
      next: (value) => this.router.navigate(['/tarefas']),
      error: (err) => alert("Ocorreu um erro")
    });
  }
}
