import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';
import { CartaoItemComponent } from '../../compartilhados/componentes/cartao-item/cartao-item.component';
import { FaixaInstitucionalComponent } from '../../compartilhados/componentes/faixa-institucional/faixa-institucional.component';

@Component({
  selector: 'app-educacao-futuro',
  standalone: true,
  imports: [BannerHeroComponent, CartaoItemComponent, FaixaInstitucionalComponent, RouterLink],
  templateUrl: './educacao-futuro.component.html',
  styleUrl: './educacao-futuro.component.css',
})
export class EducacaoFuturoComponent {

  iniciativas = [
    {
      icone: '🏫',
      titulo: 'Apoio às Escolas',
      descricao: 'Apoio a instituições de ensino por meio de melhorias na infraestrutura, materiais didáticos e recursos que contribuam para a qualidade da aprendizagem.',
    },
    {
      icone: '📚',
      titulo: 'Reforço Escolar',
      descricao: 'Incentivo a programas de acompanhamento educacional, oferecendo suporte aos estudantes que enfrentam dificuldades no aprendizado.',
    },
    {
      icone: '💻',
      titulo: 'Inclusão Digital',
      descricao: 'Promoção do acesso à tecnologia nas escolas, incentivando o uso de computadores, ferramentas digitais e recursos tecnológicos na educação.',
    },
    {
      icone: '🎓',
      titulo: 'Formação de Jovens',
      descricao: 'Apoio a iniciativas de capacitação e desenvolvimento de habilidades, preparando jovens para novas oportunidades acadêmicas e profissionais.',
    },
  ];

  impactos = [
    { icone: '📖', texto: 'Ampliação do acesso ao conhecimento' },
    { icone: '🏅', texto: 'Incentivo à permanência escolar' },
    { icone: '🔧', texto: 'Desenvolvimento de novas habilidades' },
    { icone: '🌱', texto: 'Criação de oportunidades para jovens' },
  ];

  numeros = [
    { valor: '+12 mil', descricao: 'estudantes beneficiados', icone: '🎒' },
    { valor: '85',      descricao: 'escolas apoiadas em 2024', icone: '🏫' },
    { valor: '+3 mil',  descricao: 'equipamentos doados',       icone: '💻' },
    { valor: '14',      descricao: 'estados com projetos ativos', icone: '📍' },
  ];
}
