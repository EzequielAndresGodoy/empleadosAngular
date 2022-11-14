import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleadoListaOpcion2',
  templateUrl: './empleadoListaOpcion2.component.html',
  styleUrls: ['./empleadoListaOpcion2.component.css']
})
export class EmpleadoListaOpcion2Component implements OnInit {

  @Input() empleado:empleado;

  arrayCaracteristicas:string[] = [];

  constructor(private miServicio: ServicioEmpleadosService) { }

  ngOnInit() {
  }

  agregarCaracteristica(caracteristica: string){
    this.miServicio.muestraMensaje(caracteristica)
    this.arrayCaracteristicas.push(caracteristica)
  }

}
