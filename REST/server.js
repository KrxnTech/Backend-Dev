const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
app.use(express.urlencoded({ extended: true }))
app.set('view engine', "ejs")
app.set("views", path.join(__dirname, "views"))
app.set(express.static(path.join(__dirname, "public")))


// Resources 🔥
let posts = [
    { username: "ApnaCollege", content: "I Loveee Coding" },
    { username: "AlexSenty", content: "I am DevOps Eng" },
    { username: "BroCode", content: "I Like to Teach Coding" },
]


// IMPLEMENTING - GET /posts ( index rotue ) : Show all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})


// IMPLEMENTIGN - This is Going to serve the form 
app.get("/posts/new", (req, res) => {
    res.render("AddPost.ejs")
})


// This will add new post so this is add post API
app.post("/posts", (req, res) => {
    let { username, content } = req.body
    posts.push({ username, content })
    res.redirect("/posts")
})








// BASIC API 
app.get("/", (req, res) => {
    res.send("🙏")
})

app.listen(PORT, () => {
    console.log("App Starts on PORT", PORT)
})