import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './compartilhados/componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './compartilhados/componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
