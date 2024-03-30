import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from '../interfaces/recipes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  // Sebastian
  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = 'c47ab9fb67f01fe862db94d2b1bf8302';
  private app_id = '42ff455c';

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipes(searchquery: string, cuisineType?: string, mealType?: string, diet?: string, limit: number = 10):Observable<any>{
    // let cuisineType = "Asian";
    // let mealType = "Breakfast";
    // let diet = "balanced";

    let url = this.baseUrl + "&q=" + searchquery + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&to=" + limit;
    //  + "&diet=" + diet + "&cuisineType=" + cuisineType + "&mealType=" + mealType
    
    if(cuisineType && cuisineType.trim() !== '') {
      url += "&cuisineType=" + cuisineType;
    }
    
    if(mealType && mealType.trim() !== '') {
      url += "&mealType=" + mealType;
    }
    
    if(diet && diet.trim() !== '') {
      url += "&diet=" + diet;
    }

    return this.http.get<any>(url, this.httpOptions);
  }

}
