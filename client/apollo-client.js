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
            pages
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

async function GetCharacterById(characterId) {
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
    variables: { characterId: characterId },
  });
  return data;
}

module.exports = {
  GetAllCharacters,
  GetCharacterById,
};

//xport default client;
