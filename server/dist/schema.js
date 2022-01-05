import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
    type Query {
        hello: String
    }
`;
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
//# sourceMappingURL=schema.js.map