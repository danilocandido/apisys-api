import { NgModule }  from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Aluno } from '../model/aluno'

//material
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { AlunoService } from '../aluno.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  displayedColumns = ['nome', 'curso', 'matricula', 'semestre', 'status', 'ações' ];
  alunoDataSource: AlunoDataSource | null;

  aluno = new Aluno();

  clicked = false;
  editIndex = null;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.listarAluno();
  }


  listarAluno(){
    this.alunoDataSource = new AlunoDataSource(this.alunoService);
  }

  adicionarAluno(frm: FormControl){
    console.log(frm.value);
    if(!this.clicked){
      console.log("add");
      this.alunoService.adicionar(frm.value)
        .subscribe(() => {
          frm.reset();//limpar o formulário
          this.listarAluno();//consulta novamente após adicionar
      });
    }else{
      console.log("edit");
      this.alunoService.editar(this.aluno)
        .subscribe(() => {
          frm.reset();//limpar o formulário
          this.listarAluno();//consulta novamente após adicionar
          this.clicked = false;
      });
    }
    
  }

  clickEdit(id){
    this.clicked = !this.clicked;
    this.editIndex = id;
  }

  editarAluno(aluno: Aluno){
    this.aluno = aluno;
  }

  detetarAluno(aluno: Aluno){
    this.alunoService.deletar(aluno)
      .subscribe(() => {  
        this.listarAluno();//consulta novamente após adicionar
    });
  }

  statusTypes = [
    {value: 'MATRICULADO', viewValue: 'Matriculado'},
    {value: 'TRANCADO', viewValue: 'Trancado'},
    {value: 'JUBILADO', viewValue: 'Jubilado'}
  ];

}

/*
export interface Aluno {
  nome: string;
  curso: string;
  matricula: number;
  semestre: number;
  status: string
}
*/



export class AlunoDataSource extends DataSource<any> {
  constructor(private _alunoService: AlunoService) {
    super();
  }
  
  subject: BehaviorSubject<Aluno[]> = new BehaviorSubject<Aluno[]>([]);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Aluno[]> {
    console.log('connect');
    if (!this.subject.isStopped)
        this._alunoService.listar()
            .then(res => {
                console.log(res)
                this.subject.next(res)
            });
    return Observable.merge(this.subject);
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }
}