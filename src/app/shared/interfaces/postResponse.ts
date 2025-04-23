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
    categoria: Categoria[];
    createdAt: string;
    seo: {
      title: string;
      metaDescription: string;
      metaKeywords: string;
      ogShare: {
        url: string;
        width: number;
        height: number;
      }
    }
  };
}


export interface Categoria {
  nomeDaCategoria: string;
  slug: string;
}