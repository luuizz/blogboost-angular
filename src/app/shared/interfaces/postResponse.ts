export interface PostResponse {
  post: {
    slug: string;
    titulo: string;
    conteudoPost: {
      html: string;
    }[];
    imagemDestacada: {
      width: number;
      height: number;
      url: string;
    };
    categoria: Categoria[]; // CORREÇÃO AQUI
    createdAt: string;
  };
}


export interface Categoria {
  nomeDaCategoria: string;
  slug: string;
}