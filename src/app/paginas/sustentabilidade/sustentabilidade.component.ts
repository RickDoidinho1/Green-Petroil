import { Component } from '@angular/core';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';
import { CartaoItemComponent } from '../../compartilhados/componentes/cartao-item/cartao-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sustentabilidade',
  imports: [BannerHeroComponent, CartaoItemComponent, RouterLink],
  templateUrl: './sustentabilidade.component.html',
  styleUrl: './sustentabilidade.component.css',
})

export class SustentabilidadeComponent {
  pilares = [
    {
      icone: '🌿',
      titulo: 'Ambiental',
      descricao: 'Minimizar os impactos ambientais e preservar os recursos naturais.',
    },
    {
      icone: '🏛️',
      titulo: 'Social',
      descricao: 'Fortalecer as comunidades, promovendo inclusão e desenvolvimento.',
    },
    {
      icone: '✅',
      titulo: 'Governança',
      descricao: 'Atuar com ética, transparência e responsabilidade em todas as nossas relações.',
    },
    {
      icone: '💡',
      titulo: 'Inovação',
      descricao: 'Investir em soluções sustentáveis e em tecnologias de baixo carbono.',
    },
  ];

  resultados = [
    { valor: '-32%', descricao: 'de emissões de CO₂ (vs. 2019)', icone: '📉' },
    { valor: '98%', descricao: 'dos resíduos reaproveitados ou reciclados', icone: '♻️' },
    { valor: '-45%', descricao: 'no consumo de água nas operações', icone: '💧' },
    { valor: '+120 mil', descricao: 'árvores plantadas em projetos de compensação', icone: '🌳' },
  ];

  iniciativas = [
    {
      icone: '⚡',
      titulo: 'Energia Renovável',
      descricao: 'Uso de fontes renováveis para reduzir nossa pegada de carbono.',
    },
    {
      icone: '🛢️',
      titulo: 'Combustíveis Mais Limpos',
      descricao: 'Desenvolvimento de produtos com menor impacto ambiental.',
    },
    {
      icone: '🔄',
      titulo: 'Economia Circular',
      descricao: 'Reaproveitamento de resíduos e incentivo à reciclagem.',
    },
    {
      icone: '📚',
      titulo: 'Educação Ambiental',
      descricao: 'Programas de conscientização para colaboradores e comunidade.',
    },
  ];
}
