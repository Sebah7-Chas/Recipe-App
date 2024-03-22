import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe-Frontend';
//   the navbar links commented out in html file( app.component.html)
// menuShow = false;
//   toggleNavbar(){
//     this.menuShow = !this.menuShow;
// }
}