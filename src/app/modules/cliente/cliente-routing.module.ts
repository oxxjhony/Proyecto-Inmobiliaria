import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  
{
  path:'registro',
  component:RegistroComponent
}
,
{
  path: '',
  pathMatch:'full',
  redirectTo:'/home'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
