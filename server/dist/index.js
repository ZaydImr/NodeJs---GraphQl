import express from 'express';
/*import { schema } from './schema'

const  graph  = require("express-graphql")
*/

const app = express();
/*app.use('/graphql', graph.graphqlHTTP({
    graphiql : true,
    schema: schema  
}))*/

app.listen(3000, () => {
  console.log('server is now running on the port : 3000');
});
//# sourceMappingURL=index.js.map