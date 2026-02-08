const express = require('express')
const app = express()
const PORT = 3000


// EXPRESS WANT'S TO PARSE - JSON AND URLLENCODED DATA 

// SET MIDDLE WARES FOR POST REQ DATA
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MAKING AN API ROUTE FOR WHICH WILL ACCEPT DATA FROM FRONTEND 
app.get("/register", (req, res) => {
    const { UserName, PassWord } = req.query
    res.send(`This is a GET Req - Welcome ${UserName}`)
})

app.post("/register", (req, res) => {
    let { UserName, PassWord } = req.body
    res.send(`POST Req - Welcome ${UserName}`)
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log("Server Start ....")
})