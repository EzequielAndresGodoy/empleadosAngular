import { Component } from '@angular/core';
import { empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empleados';

  empleados: Array<empleado> = [
    new empleado("Nombre1","Apellido1","Puesto1",1000),
    new empleado("Nombre2","Apellido2","Puesto2",1001),
    new empleado("Nombre3","Apellido3","Puesto3",1002),
    new empleado("Nombre4","Apellido4","Puesto4",1003)
  ]

  nombre: string = "";
  apellido: string = "";
  puesto: string = "";
  salario: number = 0;

  registrarEmpleado() {
    this.empleados.push( new empleado(this.nombre, this.apellido, this.puesto, this.salario))
  }

}
