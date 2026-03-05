const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: true }))
app.set('view engine', "ejs")
app.set("views", path.join(__dirname, "views"))
app.set(express.static(path.join(__dirname, "public")))
app.use(methodOverride('_method'))



// Resources 🔥
let posts = [
    { username: "ApnaCollege", content: "I Loveee Coding", id: uuidv4() },
    { username: "AlexSenty", content: "I am DevOps Eng", id: uuidv4() },
    { username: "BroCode", content: "I Like to Teach Coding", id: uuidv4() },
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
    let Id = uuidv4()
    posts.push({ username, content, Id })
    res.redirect("/posts")
})

// Show the post in Detail ... 
app.get("/posts/:id", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", { post })
})

// Implementing : PATCH or PUT ( Edit Post ) - /posts/:id = UPDATE Route 
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params
    let NewContent = req.body.content
    let post = posts.find((p) => id === p.id)
    post.content = NewContent
    console.log(post)
    res.redirect("/posts")
})

// Serve the Edit Form - /posts/:id/edit = GET Req : EDIT Route 
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("Update.ejs", { post })
})

// Implmenting Delete Operation ( delete Specific post ) - DELETE Route or Destroy Route - /posts/:id
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params
    posts = posts.filter((p) => id !== p.id)
    res.redirect("/posts")
})




// BASIC API 
app.get("/", (req, res) => {
    res.send("🙏")
})

app.listen(PORT, () => {
    console.log("App Starts on PORT", PORT)
})