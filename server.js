import http from "http";
import express from 'express';

const app = express();
const Port = process.env.Port || 3000;
app.get("/", (req, res) => {
    const status = {
        "Status" : "running"
    }
    res.send(status);
});

const start =  async () => {
    try {
        app.listen(Port, () => {
            console.log("Server Listening on PORT:", Port);
        })
    } catch (error) {
        console.log(error);
    }
}

start()