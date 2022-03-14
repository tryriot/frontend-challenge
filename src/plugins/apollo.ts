import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://relaxing-pipefish-44.hasura.app/v1/graphql",
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
