import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearInmuebleComponent} from './crear-inmueble/crear-inmueble.component'


const routes: Routes = [
  {
    path:'crearinmueble',
    component:CrearInmuebleComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
