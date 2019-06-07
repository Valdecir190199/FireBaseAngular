import { Injectable } from '@angular/core';
import { Contato } from '../contato/entidade/contato';

@Injectable({
  providedIn: 'root'
})


export class ServicoContatoService {



    listaContato = new Array<Contato>();


    salvar(contato : Contato) : void {
      this.listaContato.push(contato);

    }


  constructor() { }
}
