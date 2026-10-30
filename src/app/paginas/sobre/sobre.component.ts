import { Component } from '@angular/core';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';
import { FaixaInstitucionalComponent } from '../../compartilhados/componentes/faixa-institucional/faixa-institucional.component';

@Component({
  selector: 'app-sobre',
  imports: [BannerHeroComponent, FaixaInstitucionalComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent {
  valores = [
    { icone: '🌿', titulo: 'Sustentabilidade', descricao: 'Compromisso com o planeta em cada decisão.' },
    { icone: '🤝', titulo: 'Ética', descricao: 'Transparência e integridade em todas as relações.' },
    { icone: '💡', titulo: 'Inovação', descricao: 'Buscamos soluções tecnológicas para um futuro melhor.' },
    { icone: '👥', titulo: 'Pessoas', descricao: 'Valorizamos cada colaborador e cada comunidade.' },
  ];
}
