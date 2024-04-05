import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-onerecipe',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './onerecipe.component.html',
  styleUrl: './onerecipe.component.css'
})
export class OnerecipeComponent implements OnInit {

  recipeId?: string;
  chosenRecipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  // Method to round up a number
  roundUp(num: number): number {
    return Math.ceil(num);
  }

   ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeId = String(params.get('id'));
      if(this.recipeId){
        console.log(this.recipeId);
        this.viewRecipe(this.recipeId);
      }
    })

  }

  viewRecipe(id: string){
    console.log(`View id:`, id);
    this.recipeService.getRecipeById(id).subscribe({
      next:(data )=> {
        console.log(`recived recipe data:`, data);
        this.chosenRecipe = data;
      }, 
      error: (error) => {
        console.error(`error fetching recipe`, error);
      }
    })
  } 
}