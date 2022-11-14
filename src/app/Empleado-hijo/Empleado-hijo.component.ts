import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-EmpleadoHijo',
  templateUrl: './Empleado-hijo.component.html',
  styleUrls: ['./Empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

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
