import {
  HttpClient, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject, Observable, catchError, map, of, tap, throwError
} from 'rxjs';
import { User } from '../interfaces/user';
import { Loggedindetails } from '../interfaces/loggedindetails';
import { Loggedin } from '../interfaces/loggedin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn = new BehaviorSubject<Loggedin>({
    user: undefined,
    loginState: false,
  });
  loggedIn$ = this.loggedIn.asObservable();

  private baseUrl = 'https://u06-fullstack-recipe-app-sebah7.onrender.com/api/';
  // private baseUrl = 'http://127.0.0.1:8000/api/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  registerUser(registerDetails: any) {
    return this.http
      .post<any>(this.baseUrl + 'register', registerDetails, this.httpOptions)
      .pipe(catchError(this.handleError))
      // .subscribe((result) => {
        .pipe(tap((result) => {
        console.log(result);
        this.updateLoginState({
          user: result.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization',
          'Bearer ' + result.token
        );
      },
      (error) => {
        console.error('Registration failed:', error);
      }));
  }

  loginUser(loginDetails: Loggedindetails) {
    return this.http
      .post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions)
      .pipe(catchError(this.handleError))
      .pipe(tap ((result) => {
        console.log(result);
        this.updateLoginState({
          user: result.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization',
          'Bearer ' + result.token
        );
      },
      (error) => {
        console.error('Login failed:', error);
      }));
  }

  logoutUser() {
    this.updateLoginState({
      user: undefined,
      loginState: false,
    });
    // removing auth token
    this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
    console.log('User has been logged out');
  }

  getLoginStatus() {
    return this.loggedIn.value.loginState;
  }
  
  updateLoginState(loginState: Loggedin) {
    this.loggedIn.next(loginState);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error('An error occurred', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later')
    );
  }

}
