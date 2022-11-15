import { Injectable } from "@angular/core";
import { empleado } from './empleado.model';
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService{

  constructor(private servicioVentana: ServicioEmpleadosService) {}

  empleados: Array<empleado> = [
    new empleado("Nombre1","Apellido1","Puesto1",1000),
    new empleado("Nombre2","Apellido2","Puesto2",1001),
    new empleado("Nombre3","Apellido3","Puesto3",1002),
    new empleado("Nombre4","Apellido4","Puesto4",1003)
  ]

  agregarEmpleadoServicio(empleado: empleado){
    this.servicioVentana.muestraMensaje(`Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, Puesto: ${empleado.puesto}, Salario: ${empleado.salario}`)
    this.empleados.push(empleado)
  }

  encontrarEmpleado(indice:number) {
    return this.empleados[indice]
  }

  actualizarEmpleado(empleado: empleado, indice: number){

    this.empleados[indice] = empleado

  }
  
  eliminarEmpleado(indice: number){

    this.empleados.splice(indice, 1) 

  }

}