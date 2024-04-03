import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Loggedin } from '../../interfaces/loggedin';
import { Loggedindetails } from '../../interfaces/loggedindetails';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// the loginForm! here is a shorthand for initializing the loginForm property in the constructor
// the formbuilder is used to create the form group and it is injected into the constructor 
  loginForm!: FormGroup;
  loginError: string = "";


  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  loginUser() {
    if (this.loginForm.valid) {
      const loginDetails: Loggedindetails = this.loginForm.value;
      this.auth.loginUser(loginDetails).subscribe(success => {
        if (success) {
          this.router.navigate(['/profile']);
    } else {
      this.loginError = "Unable to login. Please try again later.";
    }
  }, error => {
    this.loginError = "Unable to login. Please try again later.";
  });
} else {
  this.loginForm.markAllAsTouched();
  }
}

  logout(){
    this.auth.logoutUser();
  }
}
