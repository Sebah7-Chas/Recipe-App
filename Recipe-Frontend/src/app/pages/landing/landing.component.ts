import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecipesearchComponent } from '../recipesearch/recipesearch.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RecipesearchComponent, CommonModule, RouterLinkActive],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
