import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // The link to our backend / server:
  link: link,
});

function App() {
  return <ApolloProvider client={client}></ApolloProvider>;
}

export default App;
