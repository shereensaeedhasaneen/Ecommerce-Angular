import { FireAuthRepositoryImp, ApiAuthRepositoryImp } from './../../../data/repostories/auth_repository_imp';
import { AuthLogic } from './../../../data/auth_logic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(AuthLogic:AuthLogic) { }

  ngOnInit(): void {
     new AuthLogic(new ApiAuthRepositoryImp).loginLogic
  }

}
