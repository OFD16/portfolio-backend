const router = require('express').Router();
const projects = require('../data/models/project');

router.get('/', (req, res) => {
    projects.getProjects()
        .then(projects => {
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

//errorhandling hatalı
router.post('/', (req, res, next) => {
    const newProject = req.body;

    if (!newProject.user_id && !newProject.project_name && !newProject.project_title && !newProject.project_intro && !newProject.intro_image) {
        next({
            statusCode: 400,
            errorMessage: "Gönderdiğin veride proje sahibini id'si, proje adı, proje başlığı, proje introsu ve proje intro resmi olmak zorunda bunlardan biri eksik olabilir!",
        })
    } else {
        projects.addProject(newProject)
            .then((added) => {
                res.status(201).json(added);
            }).catch((error) => {
                next({
                    statusCode: 500,
                    errorMessage: "Proje oluşturulurken hata oluştu daha sonra tekrar deneyiniz!",
                    error,
                })
            })
    }
});

//errorhandling hatalı
//put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const updatedProject = req.body;

    if (!updatedProject.user_id && !updatedProject.project_name && !updatedProject.project_title && !updatedProject.project_intro && !updatedProject.intro_image) {
        next({
            statusCode: 400,
            errorMessage: "Gönderdiğin veride proje sahibini id'si, proje adı, proje başlığı, proje introsu ve proje intro resmi olmak zorunda bunlardan biri eksik olabilir!",
        })
    } else {
        projects.updateProject(updatedProject, id)
            .then((updated) => {
                res.status(200).json(updated)
            }).catch((error) => {
                next({
                    statusCode: 500,
                    errorMessage: "project güncellenirken hata oluştu daha sonra tekrar deneyiniz!",
                    error,
                })
            })
    }


});

//errorhandling hatalı
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

    projects.getProjectByID(id)
        .then((isExist) => {
            projects.deleteProject(id)
                .then((deleted) => {
                    if (deleted) {
                        res.status(204).end();
                    } else {
                        next({
                            statusCode: 400,
                            errorMessage: "Silmeye çalıştığınız proje bulunamadı!",
                        })
                    }
                }).catch((error) => {
                    next({
                        statusCode: 500,
                        errorMessage: "proje silinirken hata oluştu daha sonra tekrar deneyiniz!",
                        error,
                    })
                })
        }).catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "Silmek istediğiniz proje bulunmadı!",
                error,
            })
        })
});

//errorhandling hatalı
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    projects.getProjectByID(id)
        .then((project) => {
            if (project) {
                res.status(200).json(project);
            } else {
                next({
                    statusCode: 400,
                    errorMessage: "aradığınız proje bulunamadı!",
                })
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "proje aranırken bir sorun oluştu! Lütfen daha sonra tekrar dene.",
                error,
            })
        })
});


module.exports = router;