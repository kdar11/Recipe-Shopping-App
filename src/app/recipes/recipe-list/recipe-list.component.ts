import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../Recipe.Service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipes>();
  public recipes : Recipes[]=[
     
  ];
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }
   
}
