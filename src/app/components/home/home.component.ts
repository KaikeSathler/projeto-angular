import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recipes: string[] = [
    'Macarrão Carbonara',
    'Frango ao Curry',
    'Salada Grega',
    'Sopa de Lentilha',
    'Hambúrguer Caseiro',
    'Torta de Maçã'
  ];

  selectedRecipe: string | null = null;

  getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * this.recipes.length);
    this.selectedRecipe = this.recipes[randomIndex];
    alert(`Receita Aleatória: ${this.selectedRecipe}`);
  }
}
