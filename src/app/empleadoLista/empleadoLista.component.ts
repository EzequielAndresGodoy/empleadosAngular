import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadoLista',
  templateUrl: './empleadoLista.component.html',
  styleUrls: ['./empleadoLista.component.css']
})
export class EmpleadoListaComponent implements OnInit {

  @Input() empleados:Array<empleado>;

  constructor() { }

  ngOnInit() {
  }

  arrayCaracteristicas:string[] = [];

  agregarCaracteristica(caracteristica: string){
    this.arrayCaracteristicas.push(caracteristica)
  }
}
