export interface RelatedPost {
  slug: string;
  titulo: string;
  createdAt: string;
  imagemDestacada: {
    url: string;
    width: number;
    height: number;
  };
  categoria: { nomeDaCategoria: string; slug: string }[];
  conteudoPost: { html: string }[];
  readingTime: string
}