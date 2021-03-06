import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/ingredients.model';
import { RecipeService } from '../Recipe.Service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe!:Recipes;
   id!:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params : Params)=>{
        this.id= +params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList(){
       this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
