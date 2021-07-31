import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-historial-transferencias',
  templateUrl: './historial-transferencias.component.html',
  styleUrls: ['./historial-transferencias.component.css']
})
export class HistorialTransferenciasComponent implements OnInit {

  transferencias: any = [];

  constructor(private tsService: TransferenciasService) { }

  ngOnInit(): void {
    this.listTransferencias();
  }

  listTransferencias(){
    this.tsService.listTransferencias().subscribe(res =>{
      this.transferencias = res;
      
    });
  }

}
