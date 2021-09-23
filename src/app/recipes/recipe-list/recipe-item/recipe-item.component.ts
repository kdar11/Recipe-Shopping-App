import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../Recipe.Service';
import { Recipes } from '../../recipes.model';
import { RecipeListComponent } from '../recipe-list.component';
 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!:Recipes;
   @Input() index!:number;
  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
  }
   

}
