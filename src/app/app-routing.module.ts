import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  
  {
    path: 'transferencias',
    loadChildren: () => import('./transferencias/transferencias.module').then(module => module.TransferenciasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
    
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
   
  },
  {
    path: '**',
    component: ErrorPageComponent
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
