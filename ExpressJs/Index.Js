const express = require("express")
const app = express()

const PORT = 3000

// HOME ROUTE 
// app.use("/", (req, res) => {
//     // res.send("You Visited Universal Route") String 
//     // res.send(["Krishna", "CoderBoy", 30, "45KG"]) Array
//     // res.send({
//     //     name: "Krishna",
//     //     age: 30,
//     //     Role: "CodeBoy"
//     // }) Object
//     let HTML = "<h1>Hello Node</h1> <ul><li>Docs</li><li>API</li></ul>"
//     res.send(HTML)

// })

// GET ROUTE 

app.get("/Apple", (req, res) => {
    res.send("This is an Apple")
})

app.get("/Orange", (req, res) => {
    res.send("This is an Orange")
})

app.get("/Banana", (req, res) => {
    res.send("This is an Banana")
})

// POST ROUTE 
app.post("/Mango", (req, res) => {
    res.send("This is an Mango : POST Request")
})


// PATH PARAMETER'S 
// app.get("/:username", (req, res) => {
//     let { username } = req.params
//     console.log(username)
//     res.send(`Welcome to ${username} Profile :) With No Such ID`)
// })

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params
//     res.send(`Welcome to ${username} who have ID : ${id}`)
// })

// SEARCH QUERY
app.get("/search", (req, res) => {
    let { Q } = req.query  // DE CONTRUCT 
    res.send(`You Searched for : ${Q}`)
    console.log(Q)
})


// UNIVERSAL ROUTE 
app.get("/", (req, res) => {
    res.send("You Visited Universal Route")
})

// SERVER START
app.listen(PORT, () => {
    console.log("Server Is Running at PORT 3000")
})

