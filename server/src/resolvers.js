import { tasks } from "./sample.js"
import User from './models/User.js'

export const resolvers = {
    Query: {
         async users(){
            return await User.find()
         },
         async user(root, { id }){
            return await User.findById(id)
         }
    },
    Mutation: {
         async createUser( root, { input } ){
             const newUser = new User(input);
             await newUser.save();
             return newUser;
         },
         async deleteUser(root, { _id } ){
            return await User.findByIdAndDelete(_id);
         },
         async updateUser(root, { _id, input } ){
            return await User.findByIdAndUpdate( _id, input, {new: true} );
         }
    }
}