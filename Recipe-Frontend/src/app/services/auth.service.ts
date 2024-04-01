import {
  HttpClient, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject, catchError, throwError
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

  private baseUrl = 'https://u06-fullstack-recipe-app-sebah7.onrender.com/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  updateLoginState(loginState: Loggedin) {
    this.loggedIn.next(loginState);
  }

  getLoginStatus() {
    return this.loggedIn.value.loginState;
  }

  loginUser(loginDetails: Loggedindetails) {
    this.http
      .post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe((result) => {
        console.log(result);
        this.updateLoginState({
          user: result.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization',
          'Bearer ' + result.token
        );
      });
  }

  logoutUser() {
    this.updateLoginState({
      user: undefined,
      loginState: false,
    });
    // removing auth token
    this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }

  getCurrentUser() {
    if (!this.getLoginStatus()) {
      return null;
    }
    return this.fetchUserDetails();
  }

  private fetchUserDetails() {

    return this.http
    .get<User>(
      this.baseUrl + 'getUser/' + this.loggedIn.value.user?.id,
      this.httpOptions
    )
    .pipe(catchError(this.handleError));
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
