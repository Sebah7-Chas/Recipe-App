import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesearchComponent } from './recipesearch/recipesearch.component';

export const routes: Routes = [
 {
  path: 'recipes',
  component: RecipesComponent
 },
 {
  path: 'recipesearch',
  component: RecipesearchComponent
 }
];
