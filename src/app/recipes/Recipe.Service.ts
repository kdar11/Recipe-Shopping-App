import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipes } from "./recipes.model";
@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipes[]>();
public  recipeSelected = new EventEmitter<Recipes>();
private recipes : Recipes[]=[
    new Recipes(
      "A Burger",
    "NON VEG BURGER",
    "http://s3.amazonaws.com/etntmedia/media/images/ext/594390140/300-caloire-burgers-lead.jpg",
    [new Ingredient('potato',1),new Ingredient('meat',1)]
    ),
    new Recipes(
      "Veg Noodles",
    "Chinese Noodles",
    "https://static.toiimg.com/thumb/68615311.cms?width=571&height=382&imgsize=93916",
     [new Ingredient('oil',1),new Ingredient('onion',1)]
    )

  ];
   constructor(private slService:ShoppingListService){}
  getRecipes(){
      return this.recipes.slice();
  }
   
  getRecipe(index:number){
    return this.recipes[index];
  }
  setRecipe(recipes: Recipes[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

addRecipe(recipe:Recipes) {
  this.recipes.push(recipe);
  this.recipeChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipes){
  this.recipes[index] = newRecipe;
  this.recipeChanged.next(this.recipes.slice()); 
}

deleteRecipe(index: number){
  this.recipes.splice(index, 1);
  this,this.recipeChanged.next(this.recipes.slice());
}
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}