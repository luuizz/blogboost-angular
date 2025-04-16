import { GraphQLClient, gql } from 'graphql-request';
import { environment } from '../../environment';

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
