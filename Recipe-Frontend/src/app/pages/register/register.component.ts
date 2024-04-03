import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Registerdetails } from '../../interfaces/registerdetails';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  name: string = "";
  email: string = "";
  password: string = "";
  password_confirmation: string = "";
  loginError: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  registerUser(): void {
    const RegisterDetails: Registerdetails = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    };
    this.authService.registerUser(RegisterDetails).subscribe(success => {
      if (success) {
        this.router.navigate(['/profile']);
      } else {
        this.loginError = "Unable to register. Please try again later.";
      }
    }, error => {
      this.loginError = "Unable to register. Please try again later.";
    });
  }

}
