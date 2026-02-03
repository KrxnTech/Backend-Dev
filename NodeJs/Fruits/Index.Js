// Require all 3 in Index.Js

let AppleData = require("./Apple.JS")
let OrangeData = require("./Orange.JS")
let GraphesData = require("./Graphes.JS")



// Export This Array !!!
const Fruits = [
    AppleData,
    OrangeData,
    GraphesData
]

module.exports = Fruits // Exported
