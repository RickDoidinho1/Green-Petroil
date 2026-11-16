import { Component } from '@angular/core';
import { BannerHeroComponent } from '../../compartilhados/componentes/banner-hero/banner-hero.component';

@Component({
  selector: 'app-investidores',
  imports: [BannerHeroComponent],
  templateUrl: './investidores.component.html',
  styleUrl: './investidores.component.css',
})
export class InvestidoresComponent {
  periodoAtivo = '1 dia';

  periodos = ['1 dia', '1 semana', '1 mês', '6 meses', '1 ano', '5 anos'];

  infoAcao = [
    { label: 'Ticker', valor: 'GRNP3' },
    { label: 'Bolsa', valor: 'B3' },
    { label: 'Segmento', valor: 'Novo Mercado' },
    { label: 'Setor', valor: 'Energia' },
    { label: 'Free Float', valor: '42,6%' },
    { label: 'Valor de Mercado', valor: 'R$ 12,8 bi' },
  ];

  selecionarPeriodo(periodo: string) {
    this.periodoAtivo = periodo;
  }
}