import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner-hero',
  imports: [RouterLink],
  templateUrl: './banner-hero.component.html',
  styleUrl: './banner-hero.component.css',
})
export class BannerHeroComponent {
  etiqueta = input<string>('');
  titulo = input.required<string>();
  descricao = input<string>('');
  textoBotao = input<string>('');
  linkBotao = input<string>('/');
  imagemUrl = input<string>('');
  imagemAlt = input<string>('Imagem de destaque');
}
