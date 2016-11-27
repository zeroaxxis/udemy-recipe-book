import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy', 'Dummy', 'https://v.cdn.vine.co/r/avatars/AAD609E0061041219203631644672_12531c52be0.4.7_nNkRLH5nCeLvqCygN0___XO4u0M.ChfAruPu3w3ow_ViDSVX9ymPrg6crg1_KjZW.jpg?versionId=Um3bmmjv.XRSnXWFG79s8sfQuBKoa_Gi')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }

}
