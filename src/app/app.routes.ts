import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./paginas/inicio/inicio.component').then(m => m.InicioComponent),
    title: 'Green Petroil — Início'
  },
  {
    path: 'sobre',
    loadComponent: () => import('./paginas/sobre/sobre.component').then(m => m.SobreComponent),
    title: 'Green Petroil — Sobre Nós'
  },
  {
    path: 'sustentabilidade',
    loadComponent: () => import('./paginas/sustentabilidade/sustentabilidade.component').then(m => m.SustentabilidadeComponent),
    title: 'Green Petroil — Sustentabilidade'
  },
  {
    path: 'projetos-sociais',
    loadComponent: () => import('./paginas/projetos-sociais/projetos-sociais.component').then(m => m.ProjetosSociaisComponent),
    title: 'Green Petroil — Projetos Sociais'
  },
  {
    path: 'investidores',
    loadComponent: () => import('./paginas/investidores/investidores.component').then(m => m.InvestidoresComponent),
    title: 'Green Petroil — Relações com Investidores'
  },
  {
    path: 'contato',
    loadComponent: () => import('./paginas/contato/contato.component').then(m => m.ContatoComponent),
    title: 'Green Petroil — Contato'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
