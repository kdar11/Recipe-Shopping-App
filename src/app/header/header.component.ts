import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class headerComponent{
    
    constructor(private dataStorageService: DataStorageService){}
 
    onSaveData(){
        this.dataStorageService.storeRecipe();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes();
    }
}