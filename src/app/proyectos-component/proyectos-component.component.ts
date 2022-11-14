import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  ngOnInit(): void {
  }


  title = 'Empleados';

  empleados = this.empleadosService.empleados

  nombre: string = "";
  apellido: string = "";
  puesto: string = "";
  salario: number = 0;

  constructor(
    // private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,
    private router: Router
  ) {}

  
  registrarEmpleado() {
    let newempleado = new empleado(this.nombre, this.apellido, this.puesto, this.salario)
    this.empleadosService.agregarEmpleadoServicio(newempleado)
    this.router.navigate([""])
  }

  volverHome() {
    this.router.navigate([""])
  }

}
