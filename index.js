import bp from "body-parser";
import express from "express";

const server = express()
const PORT = 8000

server.use(bp.json())

const users = [
    {
        name: "oggy",
        id: 1,
    },
    {
        name: "boldoo",
        id: 2,
    },
    {
        name: "nakii",
        id: 3,
    },
]

server.get("/", (req, res) => {
    res.send({success:true, users:users}).end()
})

server.post("/", (req, res) => {
    const data = req.body
    users.push(data)
    res.send({success:true, users: users}).end()
})

server.put("/:id", (req, res) => {
    const id = req.params.id
    users.map((user) => {
        if(user.id === parseInt(id)){
            user.name = req.body.name
        }
    })
    res.send({success:true, users: users}).end()
})

server.delete("/id", (req, res) => {
    const id = req.params.id
    const deleteuserID = users.findIndex((user) => user.id === parseInt(id))
    if(deleteuserID !== -1){
        users.splice(1, deleteuserID)
    }
    res.send({success:true, users: users}).end()
})

server.listen(PORT, () => {
    console.log(` text ${PORT}`)
})