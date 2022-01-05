import pkg from 'mongoose';
const { Schema, model } = pkg;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});

export default model('User', userSchema)