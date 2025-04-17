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
          url
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

  console.log('data', data);
  return data.posts;
};
