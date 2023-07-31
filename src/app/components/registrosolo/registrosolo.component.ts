import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registrosolo',
  templateUrl: './registrosolo.component.html',
  styleUrls: ['./registrosolo.component.css']
})
export class RegistrosoloComponent {
  clientes:any={};

  constructor(private activatedRoute: ActivatedRoute, private _clienteService:ClienteService) {
    this.activatedRoute.params.subscribe(params =>{
      this.clientes=_clienteService.getCliente(params['id']);
      console.log(this.clientes);
    })
  }
}
