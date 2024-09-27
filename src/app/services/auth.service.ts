import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login, LoginReponse, User} from "../models/login.interface";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  protected baseUrl = 'http://localhost:3000/api';

  private _currentUser = signal<User|null>(null);
  private _token = signal<string|null>(null);
  //private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  private setAuthentication = (user: User, token: string): boolean => {
    this._currentUser.set(user);
    this._token.set(token);
    localStorage.setItem('token', token);
    return true
  }

  public login = (user: Login): Observable<boolean> => {
    return this.http.post<LoginReponse>(`${this.baseUrl}/auth/login`, user)
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token)),
        catchError( err => throwError( () => err.error.message ))
      )
  }

}
