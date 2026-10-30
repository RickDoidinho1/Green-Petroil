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

  documentos = [
    { titulo: 'Relatório de Resultados 4T2024', data: '28/02/2025', icone: '📊' },
    { titulo: 'Demonstrações Financeiras 2024', data: '15/02/2025', icone: '📄' },
    { titulo: 'Formulário de Referência (2024)', data: '10/02/2025', icone: '📋' },
    { titulo: 'Código de Conduta e Governança Corporativa', data: '05/01/2025', icone: '📜' },
  ];

  indicadores = [
    { titulo: 'Receita Líquida (2024)', valor: 'R$ 28,4 bilhões', variacao: '+12,7% vs. 2023' },
    { titulo: 'Lucro Líquido (2024)', valor: 'R$ 1,9 bilhão', variacao: '+18,3% vs. 2023' },
    { titulo: 'EBITDA (2024)', valor: 'R$ 3,7 bilhões', variacao: '+15,6% vs. 2023' },
    { titulo: 'Margem EBITDA', valor: '13,0%', variacao: '+0,8 p.p. vs. 2023' },
  ];

  noticias = [
    { data: '28/04/2025', titulo: 'Green Petroil registra crescimento de 12,7% na receita líquida em 2024' },
    { data: '15/04/2025', titulo: 'Green Petroil anuncia pagamento de dividendos' },
    { data: '09/03/2025', titulo: 'Expansão da rede de postos: nova unidade no interior de SP' },
    { data: '18/03/2025', titulo: 'Green Petroil é listada entre as 100 maiores empresas do setor de energia no Brasil' },
  ];

  selecionarPeriodo(periodo: string) {
    this.periodoAtivo = periodo;
  }
}
