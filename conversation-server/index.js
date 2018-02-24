import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import cors from 'cors';
import jwt from 'jsonwebtoken';

//import models from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

//import typeDefs from './schema';
//import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors('*'));

const graphqlEndpoint = '/graphql';

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress(req => ({
    schema
  })),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

app.listen(3001);