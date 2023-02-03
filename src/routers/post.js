const router = require('express').Router();
const posts = require('../data/models/post');
//+
router.get('/', (req, res) => {
    posts.getPosts()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Hiç post bulunamadı :( az ekle.",
                error,
            })
        });
});

//errorhandling hatalı
router.post('/', (req, res, next) => {
    const newPost = req.body;

    if (!newPost.user_id && !newPost.post_name && !newPost.post_title && !newPost.post_intro && !newPost.intro_image) {
        next({
            statusCode: 400,
            errorMessage: "Gönderdiğin veride post sahibini id'si, post adı, post başlığı, post introsu ve post intro resmi olmak zorunda bunlardan biri eksik olabilir!",
        })
    } else {
        posts.addPost(newPost)
            .then(added => {
                console.log("added: ", added);
                res.status(201).json(newPost);
            }).catch((error) => {
                console.log("***********************");
                res.status(500).json(
                    {
                        statusCode: 500,
                        errorMessage: "Post oluşturulurken hata oluştu daha sonra tekrar deneyiniz!",
                    }
                );
            })
    }
});

//errorhandling hatalı
//put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const updatedPost = req.body;

    if (!updatedPost.user_id && !updatedPost.post_name && !updatedPost.post_title && !updatedPost.post_intro && !updatedPost.intro_image) {
        next({
            statusCode: 400,
            errorMessage: "Gönderdiğin veride post sahibini id'si, post adı, post başlığı, post introsu ve post intro resmi olmak zorunda bunlardan biri eksik olabilir!"
        })
    } else {
        posts.updatePost(updatedPost, id)
            .then((updated) => {
                res.status(200).json(updated)
            }).catch((error) => {
                next({
                    statusCode: 500,
                    errorMessage: "post güncellenirken hata oluştu daha sonra tekrar deneyiniz!",
                    error,
                })
            })
    }


});

//errorhandling hatalı
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

    posts.getPostByID(id)
        .then((isExist) => {
            posts.deletePost(id)
                .then((deleted) => {
                    if (deleted) {
                        res.status(204).end();
                    } else {
                        next({
                            statusCode: 400,
                            errorMessage: "Silmeye çalıştığınız post bulunamadı!",
                        })
                    }
                }).catch((error) => {
                    next({
                        statusCode: 500,
                        errorMessage: "Post silinirken hata oluştu daha sonra tekrar deneyiniz!",
                        error,
                    })
                })
        }).catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Silmek istediğiniz post bulunmadı!",
                error,
            })
        })
});

//errorhandling hatalı
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    posts.getPostByID(id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                next({
                    statusCode: 400,
                    errorMessage: "aradğınız post bulunamadı!",
                })
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Post aranırken bir sorun oluştu! Lütfen daha sonra tekrar dene.",
                error,
            })
        })
});


module.exports = router;