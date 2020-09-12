const express = require("express");
const server = express();

server.use(express.json());

server.get("/api", (req, res)=>{
    res.send("welcome to the api");
})

const carRoutes = require("./cars/carRoutes");

server.use("/api/cars", carRoutes);

server.use((error, req, res, next)=>{
    res.send(500).json({message: "A server error occurred", error: error});
})

server.listen(5000, ()=> console.log("Listening on port 5000"));