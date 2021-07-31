import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public anchoLogo: number = 150;
  public btnAncho: number = 200;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  registrar(registroForm: NgForm){
    this.authService.register(registroForm.value).subscribe(res =>{
      Swal.fire('Registrado', 'Registrado correctamente', 'success')
      this.route.navigate(['auth/login'])
    }, error =>{
      if(error.error.error){
        Swal.fire('Tenemos un problema', `${error.error.error}`, 'error')
      }
    });
   
  }

}
