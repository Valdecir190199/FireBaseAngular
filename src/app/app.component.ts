import { Component } from '@angular/core';
import {Contato} from './contato/entidade/contato';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Valdecir';
  //implementando clase
  contato : Contato = new Contato();
  
  //injeção no coonstrutor
  constructor(private base: AngularFireDatabase){

  }

  salvar(){
    // quem eu quero salvar? ->contato
    this.base.list('contato').push(this.contato);

    //para limpar o campo para adicionar um novo contato
    this.contato = new Contato();
  }

}
