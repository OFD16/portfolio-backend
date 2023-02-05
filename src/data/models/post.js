const db = require('../db-config');

module.exports = {
    getPosts,
    getPostByID,
    addPost,
    updatePost,
    deletePost,
}

function getPosts() {
    return db('post');  // db.select('User'); same
}

function getPostByID(id) {
    return db('post').where({ id }).first();
}

function addPost(newPost) {

    return db('post')
        .insert(newPost)
        .returning('*')
        .then(([addedPost]) => {
            return addedPost;
        });
}

function updatePost(updatedPost, id) {
    return db('post')
        .update(updatedPost)
        .where({ id })
        .then(updated => {
            if (updated) {
                return db('post').where({ id }).first();
            }
        })
}

//.where kullanmazsak büütün User isimleri günceller yada siler
function deletePost(id) {
    return db('post').del().where({ id });
}