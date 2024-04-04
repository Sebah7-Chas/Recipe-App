import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipes } from '../../interfaces/recipes';

@Component({
  selector: 'app-onerecipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './onerecipe.component.html',
  styleUrl: './onerecipe.component.css'
})
export class OnerecipeComponent implements OnInit {

  
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

   ngOnInit(): void {

    const recipeId = this.getDecodedRecipeId(this.route.snapshot.paramMap.get('id'));
    if (recipeId) {
      this.recipeService.getRecipeById(recipeId).subscribe({
        next: (response: any) => {
          console.log('API Response:', response); 
          this.recipe = response;
        },
        error: (error: any) => {
          console.error('Error fetching recipe:', error);
        }
    });
    }
  }

      private getDecodedRecipeId(encodedId: string | null): string | null {
        if (!encodedId) {
          return null;
        }
        return decodeURIComponent(encodedId);
      }
}