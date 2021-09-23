import { EventEmitter } from "@angular/core";
import { Ingredient } from "../ingredients.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[]=[
        new Ingredient("tomoto",2),
        new Ingredient("potato",2)
   
      ];
     getIngredients(){
         return this.ingredients.slice();
     } 
     addIngredient(ingrdient:Ingredient){
         this.ingredients.push(ingrdient);
         this.ingredientsChanged.emit(this.ingredients.slice());
     }
     addIngredients(ingredients:Ingredient[]){
         this.ingredients.push(...ingredients);
         this.ingredientsChanged.emit(this.ingredients.slice());
     }
}