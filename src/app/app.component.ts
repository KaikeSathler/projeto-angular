import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vagnerangular';
  selectedIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    // Você pode adicionar qualquer lógica de inicialização aqui
  }

  onTabChange(event: MatTabChangeEvent) {
    // Loga a aba que foi selecionada
    console.log('Aba selecionada:', event.tab.textLabel);
    // Se você quiser navegar para uma rota específica com base na aba selecionada, você pode fazer isso aqui
    switch (event.index) {
      case 0:
        this.router.navigate(['/']); // Navega para a rota da primeira aba
        break;
      case 1:
        this.router.navigate(['/about']); // Navega para a rota da segunda aba
        break;
      case 2:
        this.router.navigate(['/contact']); // Navega para a rota da terceira aba
        break;
    }
  }
}