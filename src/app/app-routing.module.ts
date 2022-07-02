import { HeaderComponent } from './core/components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { IsAuthenticatedGuard } from './auth/components/login/gaurd/is-authenticated.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'products' , component:ProductsComponent , canActivate:[IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
