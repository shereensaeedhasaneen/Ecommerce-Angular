import { Component } from '@angular/core';
import { AuthServiceService } from './auth/components/login/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce-Angular';
  constructor(public authService:AuthServiceService){}
}
