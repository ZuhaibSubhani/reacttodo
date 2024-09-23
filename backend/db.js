const mongoose=require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://zuhaibsubhani:aHP8raGzxr76Lt78@cluster0.ausqj.mongodb.net/todoreact");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);
module.exports={
    todo
}