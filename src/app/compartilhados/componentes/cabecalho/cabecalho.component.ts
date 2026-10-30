import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink, MenuNavegacaoComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {}
