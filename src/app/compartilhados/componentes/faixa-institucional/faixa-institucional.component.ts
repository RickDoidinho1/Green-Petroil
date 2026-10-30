import { Component, input } from '@angular/core';

@Component({
  selector: 'app-faixa-institucional',
  imports: [],
  templateUrl: './faixa-institucional.component.html',
  styleUrl: './faixa-institucional.component.css',
})
export class FaixaInstitucionalComponent {
  etiqueta = input<string>('');
  titulo = input.required<string>();
  descricao = input<string>('');
  imagemUrl = input<string>('');
}
