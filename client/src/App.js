import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';
import Form from './components/Form';

// Error handling
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql error ${message}`);
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
  //uri:"http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <GetUsers /> */}
      <Form />
    </ApolloProvider>
  );
}

export default App;
