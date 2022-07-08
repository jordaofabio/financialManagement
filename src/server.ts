import 'reflect-metadata';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import './database';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import routes from './routes';
import resolvers from './resolvers';
import typeDefs from './schemas';

const app = express();
app.use(express.json());
app.use(routes);

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

app.use('/health', (req: Request, res: Response) => {
  res.send('<h1>I\'m alive!</h1>');
});

app.use((err: Error, req: Request, res: Response, next: NewableFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Server is running'));
