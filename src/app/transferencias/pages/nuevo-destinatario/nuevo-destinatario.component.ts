import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit {

  banks: Array<Object> = [];
  cuentas: Array<String> = ['Corriente', 'Ahorro', 'Vista'];
  expregCorreo = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  expregRut = new RegExp("^[0-9]+-[0-9kK]{1}$");
  bankSelected: string = "";
  cuentaSelected: string = "";
  destinatarioForm: FormGroup = this.fb.group({
    rut: ['',[Validators.required,Validators.pattern(this.expregRut)]],
    nombre: ['',[Validators.required,]],
    email: ['',[Validators.required,Validators.pattern(this.expregCorreo)]],
    telefono: ['',[Validators.required,]],
    banco_destino: ['',[Validators.required,]],
    tipo_cuenta: ['',[Validators.required,]],
    numero_cuenta: ['',[Validators.required,]],

  })
  
 

  constructor(private fb: FormBuilder ,private tsService: TransferenciasService) { }

  ngOnInit(): void {
    this.getBanks()
  }

  getBanks(){

    this.tsService.getBanks().subscribe(

      res =>{

        this.banks = res['banks'];
        
      }
    )
  }

  create(){
         
   this.tsService.createDestinatario(this.destinatarioForm.value).subscribe( res =>{

     Swal.fire('Destinatario añadido', 'Su destinatario fue añadido correctamente', 'success');
     this.clear();

   }, error =>{
     if(error.error.error){

      Swal.fire('Tenemos un problema', `${error.error.error}`, 'error');

  }})
   
  }
  clear(){
    this.destinatarioForm.reset();
  }

}
