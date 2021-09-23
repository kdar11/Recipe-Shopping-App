import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "./recipes/Recipe.Service";
import { Recipes } from "./recipes/recipes.model";
 

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){

    }


    storeRecipe(){
        const  recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-59974-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        }); 
    }

    fetchRecipes(){
        this.http.get<Recipes[]>('https://recipe-book-59974-default-rtdb.firebaseio.com/').subscribe(recipes => {
            this.recipeService.setRecipe(recipes);
        })
    }


}