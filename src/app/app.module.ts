import { AuthInterceptor } from './auth/components/login/interceptor/auth.interceptor';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatBadgeModule} from '@angular/material/badge';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    CoreModule,
    AuthModule,
    HttpClientModule

  ],
  providers: [ /*{provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
               }*/
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
