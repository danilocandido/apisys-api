export class Aluno {
  constructor(
    public id?: number,
    public nome?: string,
    public curso?: string,
    public matricula?: number,
    public semestre?: number,
    public status?: string
  ) {}
}