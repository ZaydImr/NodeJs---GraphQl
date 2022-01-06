import  express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'
import { connect } from './database.js'

const app = express();
connect();

app.use('/', graphqlHTTP({
    graphiql: true,
    schema: schema ,
    context: {
        messageId: 'test'
    }
}))

app.listen(3000, ()=>{
    console.log('server is now running on the port : 3000');
})