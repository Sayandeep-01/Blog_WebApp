import express from "express";
import bodyParser from "body-parser";
const port=3000;
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let postsTitle=[];
let posts=[];
let postId=-1;
app.get("/",(req,res)=>
{
    res.render("index.ejs");
});
app.get("/home",(req,res)=>
{
    res.render("index.ejs");

});
app.get("/faq",(req,res)=>
{
    res.render("faq.ejs");

});
app.get("/create",(req,res)=>
{
    res.render("input_post.ejs");

});
app.get("/posts",(req,res)=>
{
    res.render("posts.ejs",{
        postsTitle,
        posts,
        postId
    });

});
app.post("/submit",(req,res)=>
{
   postsTitle.push(req.body.title);
   posts.push(req.body.content);
   postId=postId+1;
   res.render("submission.ejs");


});
app.listen(port,()=>
{
    console.log("Live Server activated at "+port);

});