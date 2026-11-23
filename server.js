  let express=require ("express")
let app=express()


app.get("/home",(req,res) => {
    res.send("This is the home page.")
})

app.get("/about",(req,res) => {
    res.send("This is the about page.")
})

app.get("/student/:id",(req,res) => {
    const id = req.params.id
    res.json({
        "name":"Thejaswini",
        "id":id
    })
})



app.listen(3000,() =>{
    console.log("server is started http://localhost:3000")
});

