import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cartao-item',
  imports: [RouterLink],
  templateUrl: './cartao-item.component.html',
  styleUrl: './cartao-item.component.css',
})
export class CartaoItemComponent {
  icone = input<string>('');
  titulo = input.required<string>();
  descricao = input<string>('');
  imagemUrl = input<string>('');
  imagemAlt = input<string>('');
  linkTexto = input<string>('');
  linkUrl = input<string>('');
  corIcone = input<string>('#006B2D');
}
