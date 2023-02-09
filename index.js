const express = require('express');

const user_router = require("./src/routers/user");
const post_router = require("./src/routers/post");
const project_router = require("./src/routers/project");

const auth = require('./src/data/models/auth');
const helper = require('./src/scripts/helper');
const users = require('./src/data/models/user');

const server = express();

server.use(express.json()); //gelen bütün istekleri json formatında dönderir gibi bir şey

server.use("/users", user_router);

server.post('/login', (req, res, next) => {
    const email = req.body.sign_mail;
    const password = helper.crypto(req.body.password);
    // console.log("şifre: " ,password);

    const token = auth.generateAuthToken(email, password);
    const tokenTime = auth.checkTokenTime(token);
    users.login(email, password)
        .then((user) => {
            server.use("/blogs", post_router);
            server.use("/projects", project_router);
            res.status(200).json({
                statusCode: 200,
                response: "Kullanıcı başarıyla giriş yaptı!",
                user: user,
                token: token,
                tokenTime: tokenTime,
            });
            next();
        })
        .catch(error => {
            res.status(404).json(error);
        });
});

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});