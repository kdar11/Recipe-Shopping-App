
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './Recipe.Service';
 
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe!: Recipes;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipes)=>{
        this.selectedRecipe=recipe;
      }
    );
  }

}
