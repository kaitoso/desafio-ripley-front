import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(login: Login){
     return this.http.post(`${base_url}/signin`,login)
  }
  signout(){
    
    return this.http.get(`${base_url}/signout`);
  }
  register(register: Register){
    return this.http.post(`${base_url}/signup`,register)
  }
  secret(){
    return this.http.get(`${base_url}/secret/${localStorage.getItem('userId')}`).pipe(
      map( resp =>{
console.log("la resouesta es", resp);
    return true
      }, error =>{
        
        return false;
        
      })
    )
  }
}
