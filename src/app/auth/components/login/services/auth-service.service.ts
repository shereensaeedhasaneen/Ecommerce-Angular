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
  constructor(private http : HttpClient) {
    // لو فيه اكسبير ديت للتوكن اتشيك عليه هنا الاول قبل ما اعمل ست للفاليو
      const token = localStorage.getItem('token')
      this._isLoggedIn.next(!!token)
   }

  login(user:User){
      return this.http.post('https://fakestoreapi.com/auth/login',{
            username: user.username,
            password: user.password
        }).pipe(
            tap((res:any) =>{
            console.log(res.token)  // كدا جبنا ال token
            this._isLoggedIn.next(true)
            localStorage.setItem('token' , res.token)
            })
        )
  }
}
