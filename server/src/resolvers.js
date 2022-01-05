import { tasks } from "./sample.js"
import User from './models/User.js'

export const resolvers = {
    Query: {
         hello: ()=> {
             return 'Hello world with graphql';
         },
         greet(root, { name }, context ){
             console.log(context);
             return `Hello ${name}`;
         },
         tasks(){
             return tasks;
         } 
    },
    Mutation: {
        createTask(root , { input }){
            input._id = tasks.length;
            tasks.push(input);
            return input;
         }
    }
}