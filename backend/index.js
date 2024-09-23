const express=require("express");
const app=express();
const {createTodo,updateTodo}=require("./types");
const {todo}=require("./db")
app.use(express.json());

app.post("/todo",async function(req,res){
    const realbody=req.body;
    const parsedbody=createTodo.safeParse(realbody);
    if(!parsedbody){
        res.json({
            message:"input"
        })
        return;
    }
    await todo.create({
        title:realbody.title,
        description:realbody.description,
        completed:false
    })
    res.json({
        message:"created"
    })
})
app.get("/todos",async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
})
app.put("/completed",async function(req,res){
    const real=req.body;
    const parsed=updateTodo.safeParse(real);
    if(!parsed){
        res.json({
            message:"input"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo done"
    })
})
app.listen(3000);