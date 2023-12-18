const express = require('express')
const data = express()
const PORT = 8000

data.get("/", (req, res) => {
    res.send("welcome")
    res.end("welcome end")
})
  
data.listen(PORT, () => {
    console.log(`Example ${PORT}`)
})