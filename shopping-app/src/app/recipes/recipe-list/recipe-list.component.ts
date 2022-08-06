import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'test recipe',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F61050397.cms%3Fimgsize%3D246859%26width%3D800%26height%3D800&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fsamosa%2Frs61050397.cms&tbnid=2ZUZnZVXTOUYuM&vet=12ahUKEwjiq7SRi7D5AhVWi9gFHUFLC3QQMygOegUIARCaAg..i&docid=71GZxrho1okZdM&w=800&h=800&q=recipe%20images&ved=2ahUKEwjiq7SRi7D5AhVWi9gFHUFLC3QQMygOegUIARCaAg'
    ),
    new Recipe(
      'Recipe 1',
      'test recipe',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F61050397.cms%3Fimgsize%3D246859%26width%3D800%26height%3D800&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fsamosa%2Frs61050397.cms&tbnid=2ZUZnZVXTOUYuM&vet=12ahUKEwjiq7SRi7D5AhVWi9gFHUFLC3QQMygOegUIARCaAg..i&docid=71GZxrho1okZdM&w=800&h=800&q=recipe%20images&ved=2ahUKEwjiq7SRi7D5AhVWi9gFHUFLC3QQMygOegUIARCaAg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
