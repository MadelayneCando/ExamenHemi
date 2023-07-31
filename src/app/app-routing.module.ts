import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//AÑADIDOS
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosoloComponent } from './components/registrosolo/registrosolo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';

import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'registros', component: RegistroComponent},
  {path: 'registro/:id', component: RegistrosoloComponent},  
  {path: 'search/:dato', component: BuscarComponent},
  {path:'iniciarsesion', component:IniciosesionComponent, canActivate: [AuthGuard]},
  {path: '**',pathMatch: 'full', redirectTo: 'formulario'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
