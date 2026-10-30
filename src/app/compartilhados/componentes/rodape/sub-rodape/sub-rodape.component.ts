import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-rodape',
  imports: [],
  templateUrl: './sub-rodape.component.html',
  styleUrl: './sub-rodape.component.css',
})
export class SubRodapeComponent {
  anoAtual = new Date().getFullYear();
}
