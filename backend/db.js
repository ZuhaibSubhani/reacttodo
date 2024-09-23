import { config } from "dotenv";
import mongoose from "mongoose";
config();
const { Schema } = mongoose;
try{
    mongoose.connect(process.env.MONGO);
    console.log("connected")
}catch{
    console.log("error")
}

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);
export{
    todo
}