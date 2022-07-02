import { IAuthRepository } from './../domian/repositories/auth/i_auth_repository';
 export class AuthLogic{
  iaht:IAuthRepository;
  constructor(iauth:IAuthRepository){
this.iaht=iauth
  }

  loginLogic(){
    this.iaht.login
  }
}
