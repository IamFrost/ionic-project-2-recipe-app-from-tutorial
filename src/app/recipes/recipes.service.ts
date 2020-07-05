import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'a1',
      title: 'aaa',
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg',
      ingredients: ['fries', 'meat', 'salad']
    },
    {
      id: 'b1',
      title: 'aawdhu',
      imageUrl: 'https://i.imgur.com/9b9cufG.jpg',
      ingredients: ['sause', 'meat', 'tomatoes']
    }
  ];


  constructor() { }

  getAllRecipes() {
    // use spread operator ...  to copy old array
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    // if the inner condition true
    // return true
    // when find gets true
    // it will stop searching
    // and return that

    // use spread operator here to get it like object
    // and copy all property
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  // drop element if recipe id not equal
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
