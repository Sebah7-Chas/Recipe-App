import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [AsyncPipe, FormsModule, RouterLink, RecipeidformatterPipe],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent {

  roundUp(num: number): number {
    return Math.ceil(num);
  }
  
  recipes: any[] = [];
  searchQuery: string = '';
  cuisineType: string = '';
  mealType: string = '';
  healthLabels: string = '';
  dishType: string = '';

  constructor(private recipeService: RecipesService) {}

  searchRecipes(){

    this.recipeService.getRecipes(this.searchQuery, this.cuisineType, this.mealType, this.healthLabels, this.dishType).subscribe(res=>{
      console.log('API Response:', res);

      let recipeArray: any[];
      recipeArray = res.hits;
      console.log(recipeArray);

      let recipes = recipeArray.map(item => {
        return {
          selfrefrence: item._links.self.href,
          // selfrefrence: item.recipe.uri,
          title: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines,
          calories: item.recipe.calories,
        }
      });
      console.table(recipes);
      this.recipes = recipes;
    });
  }
}
