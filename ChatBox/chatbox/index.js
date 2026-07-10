const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//mongodb setup
main()
    .then(() =>{
        console.log("connection successful");
    })
    .catch((err) =>{
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbox');
}

//Routes....

app.get("/",(req,res)=>{
    res.send("root working");
});

//index route
app.get("/chats",async(req,res)=>{ //async func coz find() returns a promise 
    let chats=await chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

//add chat route (form+post)
app.get("/chats/add",(req,res)=>{
    res.render("add.ejs");
});
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newchat=new chat({
        from:from,
        to:to,
        msg:msg,
        dnt:new Date(),
    });
    newchat.save()
        .then(()=>{
            console.log("chat added!");
            res.redirect("/chats"); 
        })
        .catch((err)=>{
            console.log(err);
        });
       
});

//Edit route (form+post)
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let bit=await chat.findById(id);
    res.render("edit.ejs",{bit});
});
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let newchat=await chat.findByIdAndUpdate(id,
        {msg:newmsg},{runValidators:true,new:true}
    );
    console.log(newchat);
    res.redirect("/chats");
});

//delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let delchat=await chat.findByIdAndDelete(id);
    console.log(delchat);
    res.redirect("/chats");
})

//search route
app.get("/chats/search",async(req,res)=>{
    let {sender} =req.query; //jo bhi user search kare= q
    let chats=await chat.find({ from: sender });
    if (chats.length > 0) {
        res.render("index.ejs", { chats });
    } else {
        res.send("Sender Not Found!");
    }
});

app.listen(8080,()=>{
    console.log("Server is Working...");
});


