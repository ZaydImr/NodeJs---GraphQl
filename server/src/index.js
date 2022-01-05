import  express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'

const app = express()

app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema: schema  
}))

app.listen(3000, ()=>{
    console.log('server is now running on the port : 3000');
})