import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  prueba:boolean;
  constructor(private as: AuthService, private router: Router){

  }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.as.secret().pipe( 
      tap(auth =>{
        
        if (!auth) {
          this.router.navigateByUrl('/auth/login')
        }
       
      },error =>{
        this.router.navigateByUrl('/auth/login')
      }),
      );
  }
 
}
