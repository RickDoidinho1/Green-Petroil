export interface Postagem {
  id: number;
  titulo: string;
  resumo: string;
  conteudoCompleto: string;
  categoria: string;
  icone: string;
  imagemUrl: string;
  dataPublicacao: string;
  linkExterno?: string;
}
