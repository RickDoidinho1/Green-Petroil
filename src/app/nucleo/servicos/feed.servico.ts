import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Postagem } from '../modelos/postagem.modelo';
import { ProjetoSocial } from '../modelos/projeto.modelo';

@Injectable({ providedIn: 'root' })
export class FeedServico {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.greenpetroil.com.br/api';

  obterUltimosPosts(limite: number = 3): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.apiUrl}/posts?_limit=${limite}`).pipe(
      catchError(() => {
        // Mock fallback para caso o backend ainda não esteja ativo
        return of([
          {
            id: 1,
            titulo: 'Expansão de Novas Unidades Sustentáveis',
            resumo: 'Inauguramos 12 novos postos com certificação de eficiência energética e captação solar.',
            conteudoCompleto: 'A Green Petroil dá mais um passo decisivo em direção à modernização...',
            categoria: 'Expansão',
            icone: '⛽',
            imagemUrl: 'assets/imagens/posto-green-petroil.jpg',
            dataPublicacao: '20/10/2026'
          },
          {
            id: 2,
            titulo: 'Combustíveis com Menor Emissão de Carbono',
            resumo: 'Nossa nova fórmula de aditivação garante 15% menos resíduos no motor e menor impacto.',
            conteudoCompleto: 'Desenvolvida em conjunto com centros de pesquisa internacionais...',
            categoria: 'Tecnologia',
            icone: '🌿',
            imagemUrl: 'assets/imagens/folha-orvalho.jpg',
            dataPublicacao: '18/10/2026'
          },
          {
            id: 3,
            titulo: 'Relatório Trimestral de Sustentabilidade',
            resumo: 'Alcançamos 98% de reaproveitamento de resíduos em todas as bases de distribuição.',
            conteudoCompleto: 'O compromisso com as metas de ESG segue como pilar central de nossa governança...',
            categoria: 'ESG',
            icone: '📊',
            imagemUrl: 'assets/imagens/sustentabilidade-hero.jpg',
            dataPublicacao: '15/10/2026'
          }
        ]);
      })
    );
  }

  obterPostPorId(id: number): Observable<Postagem | undefined> {
    return this.http.get<Postagem>(`${this.apiUrl}/posts/${id}`).pipe(
      catchError(() => {
        return of(undefined);
      })
    );
  }

  obterProjetosSociais(): Observable<ProjetoSocial[]> {
    return this.http.get<ProjetoSocial[]>(`${this.apiUrl}/projetos-sociais`).pipe(
      catchError(() => {
        return of([
          {
            id: 1,
            titulo: 'Educação para o Futuro',
            descricao: 'Apoio a escolas e programas de reforço escolar, incentivando o acesso ao conhecimento e novas oportunidades.',
            categoria: 'Educação',
            icone: '🎓',
            corIcone: '#006B2D',
            imagemUrl: 'assets/imagens/projeto-educacao.jpg',
            linkUrl: '/projetos-sociais'
          },
          {
            id: 2,
            titulo: 'Meio Ambiente',
            descricao: 'Projetos de preservação ambiental, plantio de árvores e ações de conscientização sobre o uso responsável dos recursos naturais.',
            categoria: 'Ambiental',
            icone: '🌱',
            corIcone: '#16a34a',
            imagemUrl: 'assets/imagens/projeto-meio-ambiente.jpg',
            linkUrl: '/projetos-sociais'
          },
          {
            id: 3,
            titulo: 'Esporte e Lazer',
            descricao: 'Incentivo ao esporte como ferramenta de inclusão social, saúde e bem-estar para crianças e jovens da comunidade.',
            categoria: 'Esporte',
            icone: '⚽',
            corIcone: '#ca8a04',
            imagemUrl: 'assets/imagens/projeto-esporte.jpg',
            linkUrl: '/projetos-sociais'
          },
          {
            id: 4,
            titulo: 'Apoio à Comunidade',
            descricao: 'Doações, campanhas solidárias e parcerias com instituições locais para atender famílias em situação de vulnerabilidade.',
            categoria: 'Social',
            icone: '💚',
            corIcone: '#7c3aed',
            imagemUrl: 'assets/imagens/projeto-comunidade.jpg',
            linkUrl: '/projetos-sociais'
          }
        ]);
      })
    );
  }
}
