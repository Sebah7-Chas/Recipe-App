import { Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { OnerecipeComponent } from './pages/onerecipe/onerecipe.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
 {
  path: 'recipes',
  component: RecipesComponent
 },
 {
  path: 'recipesearch',
  component: RecipesearchComponent
 },
 {
  path: 'onerecipe:id',
  component: OnerecipeComponent
 },
 {
  path: 'register',
  component: RegisterComponent
 },
 {
  path: 'login',
  component: LoginComponent
 },
 {
  path: 'logout',
  component: LogoutComponent
 }
];
