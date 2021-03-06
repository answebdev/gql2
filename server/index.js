const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const PORT = 4000;

const schema = require('./Schemas');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log('Server running...');
});
