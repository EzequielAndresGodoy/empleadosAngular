import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoListaComponent } from './empleadoLista/empleadoLista.component';
import { EmpleadoListaOpcion2Component } from './empleadoListaOpcion2/empleadoListaOpcion2.component';
import { EmpleadoCaracteristicasComponent } from './empleadoCaracteristicas/empleadoCaracteristicas.component';

@NgModule({
  declarations: [			
    AppComponent,
      EmpleadoListaComponent,
      EmpleadoListaOpcion2Component,
      EmpleadoCaracteristicasComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
