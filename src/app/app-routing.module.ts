import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { IsAuthenticatedGuard } from './auth/components/login/gaurd/is-authenticated.guard';

const routes: Routes = [
  {path:'/login' , component:LoginComponent , canActivate:[IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
