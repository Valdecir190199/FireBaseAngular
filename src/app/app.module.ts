import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteEstadoComponent } from './campos/componente-estado/componente-estado.component';
import  { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ContatoSalvarComponent } from './contato/contato-salvar/contato-salvar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEstadoComponent,
    ContatoSalvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD5d807YIJxCvX0R1ITG455vMSKNC_tHO0",
      authDomain: "aulaangular-4c0bc.firebaseapp.com",
      databaseURL: "https://aulaangular-4c0bc.firebaseio.com",
      projectId: "aulaangular-4c0bc",
      storageBucket: "aulaangular-4c0bc.appspot.com",
      messagingSenderId: "860035984028",
      appId: "1:860035984028:web:95c70365eec9ab5a"
    }),

    AngularFireDatabaseModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
