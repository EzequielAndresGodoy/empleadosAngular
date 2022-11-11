import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleadoCaracteristicas',
  templateUrl: './empleadoCaracteristicas.component.html',
  styleUrls: ['./empleadoCaracteristicas.component.css']
})
export class EmpleadoCaracteristicasComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  agregarCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
