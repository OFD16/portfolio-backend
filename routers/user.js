// const router = require('express').Router();
// let data = require('../data.js');
// const actors = require('../data/data-model');

// router.get('/', (req, res) => {
//     actors.getActors().then(actors => {
//         res.status(200).json(actors);
//     }).catch(error => {
//         next({
//             statusCode: 500,
//             errorMessage: "Couldn't find any actor",
//             error,
//         })
//     });
// });

// //errorhandling hatalı
// router.post('/', (req, res, next) => {
//     const newActor = req.body;

//     if (!newActor.name) {
//         next({
//             statusCode: 400,
//             errorMessage: "You need to add name for adding actor!",
//         });
//     } else {
//         actors.addActor(newActor)
//             .then((added) => {
//                 console.log('added : ', added);
//                 res.status(201).json(added);
//             })
//             .catch(
//                 (error) => {
//                     //console.log('error : ', error);
//                     next({
//                         statusCode: 500,
//                         errorMessage: "Failed when tryign adding actor!",
//                         error,
//                     });
//                 }
//             );
//     }
// });

// //errorhandling hatalı
// //put ile patch arasındaki farkı put kullanırsanız bütün değerleri göndermeniz gerekir ama path kullanırsanız sadece değiştirmek istediğiniz değeri gönderirseniz yeterlidir
// router.patch('/:id', (req, res, next) => {
//     const { id } = req.params;
//     const updatedActor = req.body;

//     if (!updatedActor.name) {
//         next({ statusCode: 400, errorMessage: "Actor name cannot be null!" })
//     } else {
//         actors.updateActor(updatedActor, id)
//             .then(updated => {
//                 res.status(200).json(updated);
//             }).catch((error) => {
//                 next({
//                     statusCode: 500,
//                     errorMessage: "aktör düzenlenirken hata oluştu!",
//                     error,
//                 })
//             })
//     }


// });

// //errorhandling hatalı
// router.delete('/:id', (req, res, next) => {
//     const { id } = req.params;
//     //veritabanında bu id ye sahip bir actor varmı checklemek gerekiyor

//     actors.getActorByID(id).then(
//         (isExist) => {
//             actors.deleteActor(id) // id ye ister bu id yi ister silinecek aktörün idsini vereiblirsin birşey değişmiyor
//                 .then((deleted) => {
//                     if (deleted) {
//                         res.status(204).end();
//                     } else {
//                         next({
//                             statusCode: 400,
//                             errorMessage: "silmeye çalıştığınız actor bulunamadı!",
//                             error,
//                         });
//                     }
//                 }).catch((error) => {
//                     next({
//                         statusCode: 500,
//                         errorMessage: "aktör silinirken hata oluştu.",
//                         error,
//                     });
//                 })
//         }
//     ).catch((error) => {
//         next({
//             statusCode: 500,
//             errorMessage: "aktör silinirken hata oluştu.!",
//             error,
//         })
//     })
// });

// //errorhandling hatalı
// router.get('/:id', (req, res, next) => {
//     const { id } = req.params;

//     actors.getActorByID(id).then(
//         (actor) => {
//             if (actor) {
//                 res.status(200).json(actor);
//             } else {
//                 next({
//                     statusCode: 400,
//                     errorMessage: "actor bulunamadı",
//                 });
//             }
//         }
//     ).catch((error) => {
//         next({
//             statusCode: 500,
//             errorMessage: "actor bulunurken hata oluştu",
//             error,
//         });
//     })
// });

// //static data get ile put delete
// router.delete('/:id', (req, res) => {
//     const delete_actor_id = req.params.id;
//     const delete_actor = data.find(
//         (actor) => actor.id === Number(delete_actor_id)
//     );

//     if (delete_actor) {
//         data = data.filter((actor) => actor.id !== Number(delete_actor.id));
//         res.status(204).end();
//     } else {
//         res
//             .status(404)
//             .json({ errorMessage: "Couldn't find you tryign to delete actor" });
//     }
// });
// router.get('/:id', (req, res) => {
//     //console.log("req.body", req.body);
//     const { id } = req.params;
//     const actor = data.find((actor) => actor.id === parseInt(id));

//     if (actor) {
//         res.status(200).json(actor);
//     } else {
//         res.status(404).send("There is no result with you want to reach:...");
//     }
// });
// router.put('/:id', (req, res) => {
//     let update_actor_id = req.params.id;
//     let update_actor_body = req.body;
//     console.log("updated_Actor_body", update_actor_body);
//     selected_actor = data.find((actor) => actor.id === Number(update_actor_id));

//     if (selected_actor) {
//         selected_actor.name = update_actor_body.name;
//         selected_actor.movies = update_actor_body.movies;
//         res.status(200).json({ errorMessage: "false", process: "update actor process is succesfull" });
//     } else {
//         res.status(404).send(errorMessage, "There is no actor for update");
//     }
// });

// module.exports = router;