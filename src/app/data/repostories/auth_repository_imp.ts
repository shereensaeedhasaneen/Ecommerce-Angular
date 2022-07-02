import { IAuthRepository } from './../../domian/repositories/auth/i_auth_repository';
import { ApiAuthOperations, FireAuthOperations } from './../sources/global/firebase/auth/fire_auth_operations'
export class FireAuthRepositoryImp implements IAuthRepository{

  login(model: any) {
    return new FireAuthOperations().firelogin();
  }
  register(model: any) {
    throw new Error('Method not implemented.');
  }
}


export class ApiAuthRepositoryImp implements IAuthRepository{

  login(model: any) {
    return new ApiAuthOperations().firelogin();
  }
  register(model: any) {
    throw new Error('Method not implemented.');
  }
}
