import express from "express";
import { createTodo,updateTodo } from "./types.js";
import { todo } from "./db.js";
import { config } from "dotenv";


const app=express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});



app.get("/",function(req,res){
    re
})



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