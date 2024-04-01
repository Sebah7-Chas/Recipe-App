import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Loggedin } from '../../interfaces/loggedin';
import { Loggedindetails } from '../../interfaces/loggedindetails';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDetails: Loggedindetails;
  isLoggedIn: boolean;

  constructor(private auth: AuthService) {
    this.loginDetails = {
      email: 'mela@mela.mela',
      password: 'mela',
    };
    this.isLoggedIn = false;
  }

  login(){
    this.auth.loginUser(this.loginDetails);
  }

  logout(){
    this.auth.logoutUser();
  }
}
