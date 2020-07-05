import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
// import { timeStamp } from 'console';
import { AlertController } from '@ionic/angular';
import { RecipesPage } from '../recipes.page';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {

    this.alertCtrl.create({

      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons:
        [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              //  console.log(this.loadedRecipe.id);
              //  console.log(this.recipesService.getAllRecipes());
               this.recipesService.deleteRecipe(this.loadedRecipe.id);
              //  console.log(this.recipesService.getAllRecipes());
               // const recipesPage  = new RecipesPage(this.recipesService);
               // recipesPage.ngOnInit();
               this.router.navigate(['/recipes']);
            }
          }
        ]
    }).then(alertEl => {
        alertEl.present();
    });
  }
}
