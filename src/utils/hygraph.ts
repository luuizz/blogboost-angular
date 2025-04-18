import { GraphQLClient, gql } from 'graphql-request';
import { environment } from '../../environment';
import { RelatedPost } from '@shared/interfaces/relatedPosts';

export const hygraph = new GraphQLClient(environment.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${environment.API_HYGRAPH}`,
  },
});

export const getAllSlugs = async (): Promise<string[]> => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  const data = await hygraph.request<{ posts: { slug: string }[] }>(query);
  return data.posts.map(post => post.slug);
};

export const getRelatedPosts = async (
  slugAtual: string,
  categoriaSlug: string
): Promise<RelatedPost[]> => {
  const query = gql`
    query RelatedPosts($slugAtual: String!, $categoriaSlug: String!) {
      posts(
        where: {
          slug_not: $slugAtual,
          categoria_some: { slug: $categoriaSlug }
        }
        orderBy: publishedAt_DESC
        first: 3
      ) {
        slug
        titulo
        createdAt
        imagemDestacada {
          url(transformation: {document: {output: {format: webp}}})
          width
          height
        }
        categoria {
          nomeDaCategoria
          slug
        }
        conteudoPost {
          html
        }
      }
    }
  `;

  const data = await hygraph.request<{ posts: RelatedPost[] }>(query, {
    slugAtual,
    categoriaSlug,
  });

  return data.posts;
};

export const getLatestPosts = async (): Promise<RelatedPost[]> => {
  const query = gql`
    query GetLatestPosts {
      posts(orderBy: publishedAt_DESC, first: 4) {
        slug
        titulo
        createdAt
        imagemDestacada {
          url(transformation: {document: {output: {format: webp}}})
          width
          height
        }
        categoria {
          nomeDaCategoria
          slug
        }
        conteudoPost {
          html
        }
      }
    }
  `;

  const data = await hygraph.request<{ posts: RelatedPost[] }>(query);
  return data.posts;
};

export const getAllPosts = async (): Promise<RelatedPost[]> => {
  const query = gql`
    query GetAllPosts {
      posts(orderBy: publishedAt_DESC, first: 100) {
        slug
        titulo
        createdAt
        imagemDestacada {
          url(transformation: {document: {output: {format: webp}}})
          width
          height
        }
        categoria {
          nomeDaCategoria
          slug
        }
        conteudoPost {
          html
        }
      }
    }
  `;

  const data = await hygraph.request<{ posts: RelatedPost[] }>(query);
  return data.posts;
};
