import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  empleados: Array<empleado>
  empleado: empleado;
  accion: number;
  title = 'Empleados';

  indice: number;

  nombre: string = "";
  apellido: string = "";
  puesto: string = "";
  salario: number = 0;

  constructor(
    // private miServicio: ServicioEmpleadosService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accion = Number(this.route.snapshot.queryParams['accion']);

    //Con esto extraigo de la url el id
    this.indice = this.route.snapshot.params["id"]

    this.empleados = this.empleadosService.empleados
    this.empleado = this.empleadosService.encontrarEmpleado(this.indice);
    [this.nombre, this.apellido, this.puesto, this.salario] = [this.empleado.nombre, this.empleado.apellido, this.empleado.puesto, this.empleado.salario]
  }

  // actualizaEmpleado() {
  //   let newempleado = new empleado(this.nombre, this.apellido, this.puesto, this.salario)

  //   this.empleadosService.actualizarEmpleado(newempleado, this.indice)

  //   this.router.navigate([""])
  // }


  // eliminaEmpleado() {
  //   this.empleadosService.eliminarEmpleado(this.indice)

  //   this.router.navigate([""])
  // }

  accionEmpleado() {
    console.log(this.accion)
    if (this.accion === 1){

      let newempleado = new empleado(this.nombre, this.apellido, this.puesto, this.salario)
      this.empleadosService.actualizarEmpleado(newempleado, this.indice)
      this.router.navigate([""])

    } else if (this.accion === 2) {

      this.empleadosService.eliminarEmpleado(this.indice)
      this.router.navigate([""])

    }
  }

  volverHome() {
    this.router.navigate([""])
  }
}
