const router = require('express').Router();
const projects = require('../data/models/project');
const { getUserByID } = require('../data/models/user');
//+
router.get('/', (req, res) => {
    projects.getProjects()
        .then((projects) => {
            res.status(200).json(projects);
        })
        .catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Hiç proje bulunamadı :( az ekle.",
                error,
            })
        });
});

router.post('/', (req, res, next) => {
    const newProject = req.body;
    const user_id = req.body.user_id;

    getUserByID(user_id)
        .then(() => {
            projects.addProject(newProject)
                .then((createdProject) => res.status(201).json(createdProject))
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
    const updatedProject = req.body;

    projects.getProjectByID(id)
        .then((project) => {
            if (project !== undefined) {
                projects.updateProject(updatedProject, id)
                    .then((updated) => {
                        res.status(200).json(updated)
                    }).catch((error) => {
                        next({
                            statusCode: 500,
                            errorMessage: "Proje güncellenirken hata oluştu daha sonra tekrar deneyiniz!",
                            error,
                        })
                    })
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Güncellemeye çalıştığınız proje bulunamadı!",
                })
            }
        })
});

//+
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

    projects.getProjectByID(id)
        .then((project) => {
            if (project !== undefined) {
                projects.deleteProject(id)
                    .then((deleted) => {
                        res.status(204).end();
                    }).catch((error) => {
                        next({
                            statusCode: 500,
                            errorMessage: "Proje silinirken hata oluştu daha sonra tekrar deneyiniz!",
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

    projects.getProjectByID(id)
        .then((project) => {
            if (project !== undefined) {
                res.status(200).json(project);
            } else {
                res.status(400).json({
                    statusCode: 400,
                    errorMessage: "Proje bulunamadı!",
                })
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Proje aranırken bir sorun oluştu! Lütfen daha sonra tekrar dene.",
                error,
            })
        })
});

router.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = router;