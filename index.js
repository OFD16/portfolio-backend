const express = require('express');
const user_router = require("./routers/user");
const post_router = require("./routers/post");
const project_router = require("./routers/project");
const server = express();

server.use(express.json()); //gelen bütün istekleri json formatında dönderir gibi bir şey
server.use("/blogs", post_router);
server.use("/projects", project_router);
server.use("/users", user_router);

server.get('/', (req, res) => {
    res.send('Expressden Merhabalar!');
});

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});