import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
 
import typeDefs from './schema';
import resolvers from './resolvers';

export const schema=makeExecutableSchema({typeDefs,resolvers});
 
const app = express();

const graphqlEndpoint='/graphql';
 
// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphql', graphqlExpress({ endpointURL:graphqlEndpoint }));
 
app.listen(8080);