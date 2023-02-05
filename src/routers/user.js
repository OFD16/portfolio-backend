const router = require('express').Router();
const users = require('../data/models/user');
//+
router.get('/', (req, res) => {
    users.getUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Hiç kullanıcı bulunamadı!",
                error,
            })
        });
});

router.post('/', (req, res, next) => {
    const newUser = req.body;
    const id = req.body.id;
    users.getUserByID(id)
        .then((user) => {
            if (user !== undefined) {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Kullanıcı oluşturulamadı! Çünkü bu kullanıcı zaten mevcut!"
                })
            } else {
                users.addUser(newUser)
                    .then((addedUser) => res.status(201).json(addedUser))
                    .catch(error => next(error));
            }
        })
});

//put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
//+ id değiştirilemez onu değiştirmeye çalışma
router.patch('/:id', (req, res, next) => {

    const { id } = req.params;
    const updatedUser = req.body;

    users.getUserByID(id)
        .then((user) => {
            if (user !== undefined) {
                users.updateUser(updatedUser, id)
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
});

//+
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

    users.getUserByID(id)
        .then((user) => {
            if (user !== undefined) {
                users.deleteUser(id)
                    .then((deleted) => {
                        res.status(204).end();
                    }).catch((error) => {
                        next({
                            statusCode: 500,
                            errorMessage: "kullanıcı silinirken hata oluştu daha sonra tekrar deneyiniz!",
                            error,
                        })
                    })
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Silmek istediğiniz kullanıcı bulunmadı!",
                });
            }
        })
});

//+
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    users.getUserByID(id)
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