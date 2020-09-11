const express = require("express");
const server = express();

server.use(express.json());

server.get("/api", (req, res)=>{
    res.send("welcome to the api");
})

const carRoutes = require("./cars/carRoutes");

server.use("/api/cars", carRoutes);

server.listen(5000, ()=> console.log("Listening on port 5000"));