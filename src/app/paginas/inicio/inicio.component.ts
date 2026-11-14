import { Component, OnInit, inject, signal } from '@angular/core';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';
import { CartaoItemComponent } from '../../compartilhados/componentes/cartao-item/cartao-item.component';
import { FaixaInstitucionalComponent } from '../../compartilhados/componentes/faixa-institucional/faixa-institucional.component';
import { FeedServico } from '../../nucleo/servicos/feed.servico';
import { Postagem } from '../../nucleo/modelos/postagem.modelo';

@Component({
  selector: 'app-inicio',
  imports: [BannerHeroComponent, CartaoItemComponent, FaixaInstitucionalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  private feedServico = inject(FeedServico);
  posts = signal<Postagem[]>([]);

  combustiveis = [
    {
      icone: '⛽',
      iconeImg: 'assets/imagens/icone_de_gasolina.png',
      titulo: 'Gasolina Comum',
      descricao: 'Desempenho e economia para o seu veículo.',
    },
    {
      icone: '🛡️', 
      iconeImg: 'assets/imagens/icone_gasolina_adtivada.jpeg',
      titulo: 'Gasolina Aditivada',
      descricao: 'Mais limpeza e proteção para o motor.',
    },
    {
      icone: '🅳',
      iconeImg: 'assets/imagens/icone_Diesel_S10.jpeg',
      titulo: 'Diesel S10',
      descricao: 'Mais eficiência e menor emissão de poluentes.',
    },
    {
      icone: '🌿',
      iconeImg: 'assets/imagens/icone_do_etanol.jpeg',
      titulo: 'Etanol',
      descricao: 'Uma escolha sustentável para o futuro.',
    },
  ];

  diferenciais = [
    {
      icone: '✅',
      titulo: 'Qualidade Garantida',
      descricao: 'Combustíveis que seguem os mais altos padrões.',
    },
    {
      icone: '🌱',
      titulo: 'Sustentabilidade',
      descricao: 'Preservando o meio ambiente para as próximas gerações.',
    },
    {
      icone: '🕐',
      titulo: 'Atendimento 24h',
      descricao: 'Sempre com você, em todos os momentos.',
    },
    {
      icone: '📍',
      titulo: 'Rede de Postos',
      descricao: 'Mais conveniência para o seu trajeto.',
    },
  ];

  ngOnInit() {
    this.feedServico.obterUltimosPosts(3).subscribe(dados => {
      this.posts.set(dados);
    });
  }
}
