import bp from "body-parser";
import express from "express";
import mongoose from 'mongoose'
import url from "../backend/schema/URLmodel.js";
import { nanoid } from "nanoid";

const server = express()
const PORT = 8000

const MONGODB_URI = "mongodb+srv://otgonbayar0503:Hairtai77@oggydata.9wtbmtf.mongodb.net/?retryWrites=true&w=majority"

server.use(bp.json())

server.get("/", async (req, res) => {
    console.log(req.params.id);
    const resp = await url.find({
        shorturl: req.params.id
    })
    res.send({ success: true, resp }).end()
})

server.post("/", async (req, res) => {
    const urlbody = req.body
    const NewUrl = await url.create({
        original: urlbody,
        shorturl: nanoid()
    })
    res.send({ success: true, urls: NewUrl }).end()
})
server.listen(PORT, async () => {
    try {
        mongoose.connect(MONGODB_URI)
    } catch (error) {
        console.log(error);
    }
    console.log(` connected to mongodb port ${PORT}`)
})
// const users = [
//     {
//         name: "oggy",
//         id: 1,
//     },
//     {
//         name: "boldoo",
//         id: 2,
//     },
//     {
//         name: "nakii",
//         id: 3,
//     },
// ]

// server.get("/", (req, res) => {
//     res.send({success:true, users:users}).end()
// })

// server.get('/:id', (req, res) => {
//     const id = req.params.id;
//     const filteredData = users.filter((user) => user.id === parseInt(id));
//     res.send({ success: true, users: filteredData }).end();
//    });

// server.post("/", (req, res) => {
//     const data = req.body
//     users.push(data)
//     res.send({success:true, users: users}).end()
// })

// server.put("/:id", (req, res) => {
//     const id = req.params.id
//     users.map((user) => {
//         if(user.id === parseInt(id)){
//             user.name = req.body.name
//         }
//     })
//     res.send({success:true, users: users}).end()
// })

// server.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
//     if (deletedUserId !== -1) {
//     users.splice(deletedUserId, 1);
//     }
//     res.send({ success: true, users: users }).end();
//    });

