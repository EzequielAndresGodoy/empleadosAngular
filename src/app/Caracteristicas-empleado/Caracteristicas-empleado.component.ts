import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-CaracteristicasEmpleado',
  templateUrl: './Caracteristicas-empleado.component.html',
  styleUrls: ['./Caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  agregarCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
