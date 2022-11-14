import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './Empleado-hijo/Empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './Caracteristicas-empleado/Caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';

const appRoutes: Routes=[
  {
    path: "proyectos",
    component: ProyectosComponentComponent
  },
  {
    path: "quienes",
    component: QuienesComponentComponent
  },
  {
    path: "contacto",
    component: ContactoComponentComponent
  },
  {
    path: "actualiza/:id",
    component: ActualizaComponentComponent
  },
  {
    path: "**",
    component: HomeComponentComponent
  }
]


@NgModule({
  declarations: [			
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
