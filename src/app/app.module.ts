import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrosoloComponent } from './components/registrosolo/registrosolo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    RegistrosoloComponent,
    FormularioComponent,
    BuscarComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-vj17dw3a66etpr0k.us.auth0.com',
      clientId: 'OCWw8MWqJi2mKxsfFQ21M2d9lIoxdika',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
