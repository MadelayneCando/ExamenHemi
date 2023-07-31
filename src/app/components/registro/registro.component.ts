import { Component } from '@angular/core';
import { ClienteService, Clientes } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  clientes: Clientes[]=[];

  ngOnInit(): void{
    this.clientes= this._clienteServices.getClientes();
    console.log(this.clientes);
  }

  constructor(private _clienteServices:ClienteService,private router: Router){
    
  }
  
  verClientes(idx: number){
    console.log(idx);
    this.router.navigate(['/registro', idx]);
  }
}
