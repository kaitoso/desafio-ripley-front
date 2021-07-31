import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './pages/nav/nav.component';
import { NuevoDestinatarioComponent } from './pages/nuevo-destinatario/nuevo-destinatario.component';
import { RealizarTransferenciaComponent } from './pages/realizar-transferencia/realizar-transferencia.component';
import { HistorialTransferenciasComponent } from './pages/historial-transferencias/historial-transferencias.component';
import { HomeComponent } from './pages/home/home.component';
import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavComponent,
    NuevoDestinatarioComponent,
    RealizarTransferenciaComponent,
    HistorialTransferenciasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TransferenciasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransferenciasModule { }
