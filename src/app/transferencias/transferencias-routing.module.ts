import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorialTransferenciasComponent } from './pages/historial-transferencias/historial-transferencias.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoDestinatarioComponent } from './pages/nuevo-destinatario/nuevo-destinatario.component';
import { RealizarTransferenciaComponent } from './pages/realizar-transferencia/realizar-transferencia.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'nuevo-destinatario',
        component: NuevoDestinatarioComponent
      },
      {
        path: 'realizar-transferencia',
        component: RealizarTransferenciaComponent
      },
      {
        path: 'historial-transferencias',
        component: HistorialTransferenciasComponent
      },
      {
        path: '**',
        redirectTo: 'nuevo-destinatario'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransferenciasRoutingModule { }
