import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Destinatario } from '../interfaces/destinatario.interface';
import { Transferencia } from '../interfaces/transferencia.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  constructor(private http: HttpClient) { }

   getBanks(){
    return this.http.get("https://bast.dev/api/banks.php");
  }

  createDestinatario(destinatario: Destinatario){
    let formData = new FormData();
    Object.keys(destinatario).forEach((key)=>{formData.append(key,destinatario[key])});

    return this.http.post(`${base_url}/destinatario/create/${localStorage.getItem('userId')}`,formData);
  }

  
  
  listDestinatarios(){
    return this.http.get(`${base_url}/destinatario/list/${this.getUserId()}`)
  }
  
  createTransferencia(transferencia: Transferencia){
    let formData = new FormData();
    Object.keys(transferencia).forEach((key)=>{formData.append(key,transferencia[key])});

    return this.http.post(`${base_url}/transferencia/create/${localStorage.getItem('userId')}`,formData);
  }

  listTransferencias(){
    return this.http.get(`${base_url}/transferencias/${this.getUserId()}`)
  }
 
  getUserId() {
    return localStorage.getItem('userId');
  }
}
