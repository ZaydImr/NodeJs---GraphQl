import { tasks } from "./sample.js"

export const resolvers = {
    Query: {
         hello: ()=> {
             return 'Hello world with graphql'
         },
         greet(root, { name }){
             return `Hello ${name}`
         },
         tasks(){
             return tasks
         },
         Mutation: {
            createTask(root , { input }){
                console.log(input);
                return null
            }
         }
    }
}