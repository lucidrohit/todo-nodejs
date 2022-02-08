const express = require('express');
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 9000;

let list = ["cooking", "bathing", "tolieting", "not bathing"]

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static("public"));
app.set('view engine', "ejs");

app.get("/", (req,res)=>{
    res.render("index", {list});
});

app.post("/", (req,res)=>{

    list.push(req.body.name);
    res.render("index", {list});
});

app.post("/delete/:id", (req,res)=>{
    list.splice(parseInt(req.body.id),1);
    console.log(list);
    console.log(parseInt(req.body.id));
    res.redirect("/");
});


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});