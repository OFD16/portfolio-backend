const db = require('../db-config');

module.exports = {
    getUsers,
    getUserByID,
    addUser,
    updateUser,
    deleteUser,
}

function getUsers() {
    return db('user');  // db.select('User'); same
}

function getUserByID(id) {
    return db('user').where({ id }).first();
}

function addUser(newUser) {
    var id = parseInt(newUser.id);
    return db('user')
        .insert(newUser, 'id')
        .then(([id]) => {
            return db('user').where({ id }).first();
        });
}

function updateUser(updatedUser, id) {
    return db('user')
        .update(updatedUser)
        .where({ id })
        .then(updated => {
            if (updated) {
                return db('user').where({ id }).first();
            }
        })
}

//.where kullanmazsak büütün User isimleri günceller yada siler
function deleteUser(id) {
    return db('user').del().where({ id });
}