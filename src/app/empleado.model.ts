export class empleado {
  constructor( nombre: string, apellido: string, puesto:string, salario: number) {
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.puesto = puesto;
    this.salario = salario;

  }

  nombre: string = "";
  apellido: string = "";
  puesto: string = "";
  salario: number = 0;
}