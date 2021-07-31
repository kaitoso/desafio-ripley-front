import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){

    this.authService.signout().subscribe(
     (res) => {
        
        if (res['message']) {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          this.route.navigate(['auth/login']);
        }
        
      }
    );

  }

}
