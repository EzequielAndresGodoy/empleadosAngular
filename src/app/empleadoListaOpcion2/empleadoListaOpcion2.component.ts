import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadoListaOpcion2',
  templateUrl: './empleadoListaOpcion2.component.html',
  styleUrls: ['./empleadoListaOpcion2.component.css']
})
export class EmpleadoListaOpcion2Component implements OnInit {

  @Input() empleado:empleado;

  arrayCaracteristicas:string[] = [];

  constructor() { }

  ngOnInit() {
  }

  agregarCaracteristica(caracteristica: string){
    this.arrayCaracteristicas.push(caracteristica)
  }

}
