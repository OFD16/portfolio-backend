const db = require('../db-config');

module.exports = {
    getPosts,
    addPost,
    updatePost,
    deletePost,
    getPostByID,
}

function getPosts() {
    //console.log('postlar: ' , db('post'));
    return db('post');  // db.select('Post'); same
}

function getPostByID(id) {
    //console.log(`getPostByID: id : ${id} `, db('post').where({ id }).first());
    return db('post').where({ id }).first();
}

function addPost(newPost) {
    return db('post')
        .insert(newPost, 'id')
        .then(([id]) => {
            console.log("added kesin: ", json(db('post').where({ id }).first()));
            return db('post').where({ id }).first();
        });
}

function updatePost(updatedPost, id) {
    return db('post')
        .update(updatedPost)
        .where({ id })
        .then(updated => {
            if (updated) {
                //console.log(`updatedPost id: ${id} `, db('post').where({ id }).first());
                return db('post').where({ id }).first();
            }
        });
}

//.where kullanmazsak büütün Post isimleri günceller yada siler
function deletePost(id) {
    console.log(`deletePost id: ${id} `, db('post').del().where({ id }));
    return db('post').del().where({ id });
}