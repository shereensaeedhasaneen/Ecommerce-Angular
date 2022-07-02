import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import {tap} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false); // private
  isLoggedIn = this._isLoggedIn.asObservable(); // public

  get Token() : any{
    return localStorage.getItem('token')
  }
  constructor(private http : HttpClient) {
    // لو فيه اكسبير ديت للتوكن اتشيك عليه هنا الاول قبل ما اعمل ست للفاليو
      this._isLoggedIn.next(!!this.Token)
   }

  login(user:User){
      return this.http.post('https://fakestoreapi.com/auth/login',{
            username: user.username,
            password: user.password
        }).pipe(
            tap((res:any) =>{
            console.log(res.token)  // كدا جبنا ال token
            console.log(JSON.parse(atob(res.token.split(".")[1])))
            this._isLoggedIn.next(true)
            localStorage.setItem('token' , res.token)
            })
        )
  }
}
