const router = require('express').Router();
const users = require('../data/models/user');
const auth = require('../data/models/auth');
const helper = require('../scripts/helper');

router.post('/login', (req, res, next) => {
    const email = req.body.sign_mail;
    const password = helper.crypto(req.body.password);

    const token = auth.generateAuthToken(email, password);
    users.login(email, password)
        .then((user) => {
            res.status(200).json({
                statusCode: 200,
                response: "Kullanıcı başarıyla giriş yaptı!",
                user: user,
                token: token,
            });
        })
        .catch(error => {
            res.status(404).json(error);
        });
});

//+
router.get('/', (req, res) => {
    users.getUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({
                statusCode: 500,
                errorMessage: "Bilinmeyen bir hata oluştu!",
            })
        });
});

router.post('/', (req, res, next) => {
    const authToken = req.headers['authorization'];
    const currentUserRole = req.headers['role'];
    const newUser = req.body;

    const isAuth = auth.verifyAuthToken(authToken);

    if (isAuth.success) {
        users.addUser(newUser, currentUserRole)
            .then((addedUser) => res.status(201).json(addedUser))
            .catch(error => next(error));
    } else {
        res.status(404).json({
            statusCode: 404,
            errorMessage: "Kullanıcı oluşturmak için giriş yapmalısınız!"
        });
    }

});

//put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
//+ id değiştirilemez onu değiştirmeye çalışma
router.patch('/:id', (req, res, next) => {
    const currentUserRole = req.headers['role'];
    const authToken = req.headers['authorization'];
    const isAuth = auth.verifyAuthToken(authToken);
    const { id } = req.params;
    const updatedUser = req.body;

    if (isAuth.success) {
        users.getUserByID(id)
            .then((user) => {
                if (user !== undefined) {
                    users.updateUser(updatedUser, id, currentUserRole)
                        .then((updated) => {
                            res.status(200).json(updated)
                        }).catch((error) => {
                            next({
                                statusCode: 500,
                                errorMessage: "Kullanıcı güncellenirken hata oluştu daha sonra tekrar deneyiniz!",
                                error,
                            })
                        })
                } else {
                    res.status(400).json({
                        statusCode: 400,
                        errorMessage: "Güncellemeye çalıştığınız kullanıcı bulunamadı!",
                    })
                }
            })
    } else {
        res.status(404).json({
            statusCode: 404,
            errorMessage: "Kullanıcı oluşturmak için giriş yapmalısınız!"
        });
    }
});

//+
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    const currentUserRole = req.headers['role'];
    const authToken = req.headers['authorization'];
    const isAuth = auth.verifyAuthToken(authToken);

    if (isAuth.success) {
        users.getUserByID(id)
            .then((user) => {
                if (user !== undefined) {
                    users.deleteUser(id, currentUserRole)
                        .then((deleted) => {
                            res.status(204).end();
                        }).catch((error) => {
                            res.status(error.statusCode).json(error);
                        })
                } else {
                    res.status(400).json({
                        statusCode: 400,
                        errorMessage: "Silmek istediğiniz kullanıcı bulunmadı!",
                    });
                }
            })
    } else {
        res.status(404).json({
            statusCode: 404,
            errorMessage: "Kullanıcıyı silmek için önce giriş yapmanız gerekmektedir! Nereyi hegliyon qeqo"
        });
    }
});

//+
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const currentUserRole = req.headers['role'];
    users.getUserByID(id, currentUserRole)
        .then((user) => {
            if (user !== undefined) {
                res.status(200).json(user);
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "kullanıcı bulunamadı!",
                })
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Kullanıcı aranırken bir sorun oluştu! Lütfen daha sonra tekrar dene.",
                error,
            })
        })
});

router.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = router;