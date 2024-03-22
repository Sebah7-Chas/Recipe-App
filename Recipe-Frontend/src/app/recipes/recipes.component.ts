import { Component, OnInit, inject } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipes } from '../interfaces/recipes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent{


}
  // export class RecipesComponent implements OnInit{
  // recipes$!:Observable<Recipes[]>
  // recipeService = inject(RecipesService);
  // ngOnInit(): void {
  //   this.recipes$=this.recipeService.getRecipes()
  // }
