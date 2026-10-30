import { Component, OnInit, inject, signal } from '@angular/core';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';
import { CartaoItemComponent } from '../../compartilhados/componentes/cartao-item/cartao-item.component';
import { FaixaInstitucionalComponent } from '../../compartilhados/componentes/faixa-institucional/faixa-institucional.component';
import { FeedServico } from '../../nucleo/servicos/feed.servico';
import { ProjetoSocial } from '../../nucleo/modelos/projeto.modelo';

@Component({
  selector: 'app-projetos-sociais',
  imports: [BannerHeroComponent, CartaoItemComponent, FaixaInstitucionalComponent],
  templateUrl: './projetos-sociais.component.html',
  styleUrl: './projetos-sociais.component.css',
})
export class ProjetosSociaisComponent implements OnInit {
  private feedServico = inject(FeedServico);
  projetos = signal<ProjetoSocial[]>([]);

  ngOnInit() {
    this.feedServico.obterProjetosSociais().subscribe(dados => {
      this.projetos.set(dados);
    });
  }
}
