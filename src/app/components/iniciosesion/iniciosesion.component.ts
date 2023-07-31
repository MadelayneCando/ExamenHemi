import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  constructor(public auth: AuthService) {}

  ngOnInit(): void{
    this.auth.user$.subscribe(perfil=>{
      console.log(perfil);
    })
  }
}
