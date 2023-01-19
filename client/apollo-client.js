import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.APOLLO_URI,
  cache: new InMemoryCache(),
});

async function GetAllCharacters(page) {
  const data = await client.query({
    query: gql`
      query GetAllCharacters($page: Int!) {
        characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            image
            status
          }
        }
      }
    `,
    variables: { page: page },
  });
  return data;
}

async function GetCharacterById(context) {
  const data = await client.query({
    query: gql`
      query getCharacter($characterId: ID!) {
        character(id: $characterId) {
          episode {
            name
          }
          gender
          image
          location {
            name
          }
          name
          origin {
            name
          }
          species
          status
        }
      }
    `,
    variables: { characterId: context.params.id },
  });
  return data;
}

module.exports = {
  GetAllCharacters,
  GetCharacterById,
};

//xport default client;
