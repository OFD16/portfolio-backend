const db = require('./db-config');

module.exports = {}
// module.exports = {
//     getActors,
//     addActor,
//     updateActor,
//     deleteActor,
//     getActorByID,
// }

// function getActors() {
//     return db('actor');  // db.select('actor'); same
// }

// function getActorByID(id) {
//     return db('actor').where({ id }).first();
// }

// function addActor(newActor) {
//     return db('actor')
//         .insert(newActor, 'id')
//         .then(([id]) => {
//             return db('actor').where({ id }).first();
//         });
// }

// function updateActor(updatedActor, id) {
//     return db('actor')
//         .update(updatedActor)
//         .where({ id })
//         .then(updated => {
//             if (updated) {
//                 return db('actor').where({ id }).first();
//             }
//         })
// }

// //.where kullanmazsak büütün actor isimleri günceller yada siler
// function deleteActor(id) {
//     return db('actor').del().where({ id });
// }