import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';

import { TransferenciasService } from 'src/app/services/transferencias.service';

@Component({
  selector: 'app-realizar-transferencia',
  templateUrl: './realizar-transferencia.component.html',
  styleUrls: ['./realizar-transferencia.component.css']
})
export class RealizarTransferenciaComponent implements OnInit {

  destinatarios: any = [];
  rut: string = "";
  nombre: string = "";
  email: string = "";
  tipo_cuenta: string = "";
  banco_destino: string = "";
  numero_cuenta: string ="";
  monto: string = '';
  readyDestinatario: boolean = false;
  transferenciaForm: FormGroup = this.fb.group({
   
    monto: ['',[Validators.required,]],

  })
  
  
  constructor(private tsService: TransferenciasService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listDestinatarios();

  }

  listDestinatarios(){
    this.tsService.listDestinatarios().subscribe(res =>{
      this.destinatarios = res;
    });
  }

  encuentraDestinatario(destinatario: Object){

    let datos = destinatario['target']['value'].split('|');

    if (datos.length == 3) {
      let encontrado = this.destinatarios.filter(x => (x.nombre === datos[0]) && (x.rut === datos[1]) && (x.banco_destino === datos[2]))[0];
      this.nombre = encontrado.nombre;
      this.rut = encontrado.rut;
      this.tipo_cuenta = encontrado.tipo_cuenta;
      this.banco_destino = encontrado.banco_destino;
      this.email = encontrado.email;
      this.numero_cuenta = encontrado.numero_cuenta;
      this.readyDestinatario = true;
    }
    
    
  }
  transferir(){

    if (this.transferenciaForm.invalid || !this.readyDestinatario) {
      Swal.fire('Tenemos un problema', `Debe ingresar un monto y un destinatario`, 'error');
    }else{
      const objTransferencia = {
        nombre: this.nombre ,
        rut: this.rut,
        email: this.email ,
        tipo_cuenta: this.tipo_cuenta,
        numero_cuenta: this.numero_cuenta,
        banco_destino: this.banco_destino,
        monto: this.transferenciaForm.value.monto
      }
      this.tsService.createTransferencia(objTransferencia).subscribe(res =>{
        console.log(res);
        Swal.fire('Transferencia realizada', `Su transferencia fue realizada exitosamente.`, 'success');
        this.nombre = '';
        this.rut = "";
        this.tipo_cuenta = "";
        this.banco_destino = "";
        this.email = "";
        this.numero_cuenta = "";
        this.readyDestinatario = false;
        this.transferenciaForm.reset();
      }, error =>{
        Swal.fire('Tenemos un problema', `${error.error.error}`, 'error');
      })
    }

  }

}
