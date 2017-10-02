import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlunoService  {

  private headers = new Headers({'Content-Type': 'application/json'});
  private alunoUrl = 'http://localhost:8080/alunos'

  constructor(private http: HttpClient) { }

  listar() {
    //console.log(this.alunoUrl);
    return this.http.get(this.alunoUrl)
               .toPromise()
               .catch(this.handleError);
  }

  adicionar(aluno: any){
    return this.http.post(this.alunoUrl, aluno);
  }

  editar(aluno: any){
    return this.http.put(this.alunoUrl, aluno);
  }

  deletar(aluno: any){
    return this.http.delete(this.alunoUrl +'/'+ aluno.id);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
