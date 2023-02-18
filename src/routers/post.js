const router = require('express').Router();
const posts = require('../data/models/post');
const { getUserByID } = require('../data/models/user');
//+
router.get('/', (req, res) => {
    posts.getPosts()
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Hiç blog yazısı bulunamadı :( az ekle.",
                error,
            })
        });
});

router.post('/', (req, res, next) => {
    const newPost = req.body;
    console.log('gelen user id: ', req.body.user_id);
    const user_id = req.body.user_id;

    getUserByID(user_id)
        .then(() => {
            posts.addPost(newPost)
                .then((createdPost) => res.status(201).json(createdPost))
                .catch(error => next(error));
        }).catch(() => {
            res.status(400).json({
                statusCode: 400,
                errorMessage: "Eklemeye çalıştığınız projenin sahibi mevcut değil!",
            });
        });
});

//put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
//+ id değiştirilemez onu değiştirmeye çalışma
router.patch('/:id', (req, res, next) => {

    const { id } = req.params;
    const updatedPost = req.body;

    posts.getPostByID(id)
        .then((post) => {
            if (post !== undefined) {
                posts.updatePost(updatedPost, id)
                    .then((updated) => {
                        res.status(200).json(updated)
                    }).catch((error) => {
                        next({
                            statusCode: 500,
                            errorMessage: "Blog güncellenirken hata oluştu daha sonra tekrar deneyiniz!",
                            error,
                        })
                    })
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Güncellemeye çalıştığınız blog bulunamadı!",
                })
            }
        })
});

//+
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

    posts.getPostByID(id)
        .then((post) => {
            if (post !== undefined) {
                posts.deletePost(id)
                    .then((deleted) => {
                        res.status(204).end();
                    }).catch((error) => {
                        next({
                            statusCode: 500,
                            errorMessage: "Blog silinirken hata oluştu daha sonra tekrar deneyiniz!",
                            error,
                        })
                    })
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Silmek istediğiniz proje bulunmadı!",
                });
            }
        })
});

//+
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    posts.getPostByID(id)
        .then((post) => {
            if (post !== undefined) {
                res.status(200).json(post);
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Blog bulunamadı!",
                })
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Blog aranırken bir sorun oluştu! Lütfen daha sonra tekrar dene.",
                error,
            })
        })
});

router.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = router;