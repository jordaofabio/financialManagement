import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './schemas';
import './database';

const app = express();

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

// app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

app.listen(3333);
