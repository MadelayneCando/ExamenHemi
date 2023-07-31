import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Clientes[]=[
    {
      codigo:"1",
      fecha:"20/07/2023",
      nombre:"Alexander",
      apellido:"Ortiz",
      tipointeraccion:"FB",
      descrip:"Machala"
    },
    {
      codigo:"2",
      fecha:"22/07/2023",
      nombre:"Alejandra",
      apellido:"Infante",
      tipointeraccion:"IG",
      descrip:"Machala"
    },
    {
      codigo:"3",
      fecha:"2/07/2023",
      nombre:"Emilio",
      apellido:"Rodriguez",
      tipointeraccion:"WS",
      descrip:"Huaquillas"
    },
    {
      codigo:"4",
      fecha:"08/07/2023",
      nombre:"Javier",
      apellido:"Mayón",
      tipointeraccion:"Celular",
      descrip:"Santa Rosa"
    },
    {
      codigo:"5",
      fecha:"30/07/2023",
      nombre:"Oscar",
      apellido:"Maldonado",
      tipointeraccion:"Telefono fijo",
      descrip:"Pasaje"
    },
    {
      codigo:"6",
      fecha:"10/07/2023",
      nombre:"Elias",
      apellido:"Rocafuerte",
      tipointeraccion:"Telefono fijo",
      descrip:"Santa Rosa"
    }
  ];

  getClientes(){
    return this.clientes;
  }
  
  getCliente(idx:number):Clientes{
    return this.clientes[idx];
  }

  buscarClientes(dato:string) : Clientes[] {
    let clienteArreglo:Clientes[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.clientes.length; i++) {
      let cliente = this.clientes[i];
      let nom = cliente.nombre.toLocaleLowerCase() ;
      let ape = cliente.apellido.toLocaleLowerCase();
      if(nom.indexOf(dato) >= 0) {
        cliente.id = i;
        clienteArreglo.push(cliente);
      }
      if(ape.indexOf(dato) >= 0) {
        cliente.id = i;
        clienteArreglo.push(cliente);
      }      
    }
    return clienteArreglo;
  }
}

export interface Clientes{
  codigo: string;
  fecha: string;
  nombre: string;
  apellido: string;
  tipointeraccion: string;
  descrip: string;
  id?:number;
}