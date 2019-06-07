import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteEstadoComponent } from './campos/componente-estado/componente-estado.component';


const routes: Routes = [
{path: 'estado', component: ComponenteEstadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
