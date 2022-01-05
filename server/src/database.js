import mongoose from 'mongoose'


export async function connect(){
    try {
        await mongoose.connect("mongodb+srv://NodeJsGraph:Mf123456@cluster0.gfw8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true
        });
        console.log(">>>>> DB is connected ");
    } catch(e) {
        console.log("DB connection mal !");
        console.log(e);
    }
    
}
