const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")


// Setting UP EJS 
app.set("view engine", "ejs")

// Setting Path
app.set("views", path.join(__dirname, "/views")) // Solving Error : )


// Serving Static File 
app.use(express.static(path.join(__dirname, "public")))

// Backend-Dev/EJS/views  

// Rendering First EJS Template 
app.get("/Home", (req, res) => {
    // res.render("Home.ejs")
    res.render("Home")
})


app.get("/About", (req, res) => {
    res.send("Hello Welcome to About us Page !!!")
})


// How to Render Data Whichs is Coming from DB 
app.get("/DiceRoll", (req, res) => {
    let Num = Math.floor(Math.random() * 6) + 1
    res.render("DiceRoller", { Num })
})

// app.get("/Instagram/:UserName", (req, res) => {
//     let { UserName } = req.params
//     let { Following } = 300
//     let Followers = ["Alex", "Sham", "Charl", "Broksy"]
//     res.render("InstaProfile", { UserName, Following, Followers })
// })

app.get("/Insta/:Username", (req, res) => {
    let { Username } = req.params
    let Data = require("./data.json")
    console.log(Data)
    let User = Data[Username]
    res.render("AnimalProfile", { User })
})





app.get("/", (req, res) => {
    res.send("Universal Routingggggg")
})


app.listen(PORT, () => {
    console.log("Server Startttttt")
})