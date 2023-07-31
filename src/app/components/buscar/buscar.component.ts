import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {

  clientes:any[] = []
  dato:string = '';
  constructor(private activatedRoute:ActivatedRoute, private _clienteService:ClienteService, private router: Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params ['dato'];
      this.clientes = this._clienteService.buscarClientes(params ['dato']);
      console.log(this.clientes);
    });
  }

  verClientes(idx: number){
    console.log(idx);
    this.router.navigate(['/registro', idx]);
  }
}
