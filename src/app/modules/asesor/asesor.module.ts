import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './eliminar-inmueble/eliminar-inmueble.component';
import { ListadoInmueblesEvaluarComponent } from './listado-inmuebles-evaluar/listado-inmuebles-evaluar.component';
import { InmueblesBajoCargoComponent } from './inmuebles-bajo-cargo/inmuebles-bajo-cargo.component';


@NgModule({
  declarations: [CrearInmuebleComponent, EditarInmuebleComponent, EliminarInmuebleComponent, ListadoInmueblesEvaluarComponent, InmueblesBajoCargoComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
