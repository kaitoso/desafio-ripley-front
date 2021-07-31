import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public anchoLogo: number = 150;
  public btnAncho: number = 200;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login(miFormulario: NgForm){


    this.authService.signin(miFormulario.value).subscribe((res)=>{
      
      if(res['token']){
        localStorage.setItem('token',res['token'])
        localStorage.setItem('userId',res['user']['_id'])
        this.route.navigate(['transferencias'])
      }
      
    }, error => {
      if (error.error.error ) {
        Swal.fire('Tenemos un problema', `${error.error.error}`, 'error')
      }
    }
    )

   
  }

  

}
