import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-navegacao',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-navegacao.component.html',
  styleUrl: './menu-navegacao.component.css',
})
export class MenuNavegacaoComponent {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(v => !v);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}
