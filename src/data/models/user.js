const helper = require('../../scripts/helper');
const db = require('../db-config');
const jwt = require("jsonwebtoken");

module.exports = {
    getUsers,
    getUserByID,
    addUser,
    updateUser,
    deleteUser,
    login,
}
const columns = ['id', 'created_at', 'updated_at', 'first_name', 'last_name', 'age', 'email', 'user_image', 'social_links', 'introduction', 'description', 'medias', 'marked_projects', 'marked_blogs', 'experiences', 'education', 'skills', 'role']

function getUsers() {
    return db('user').select(columns);
}

function getUserByID(id, currentUserRole = 'notAdmin') {
    if (currentUserRole !== 'admin') {
      return db('user').where({ id }).first().then(user => {
        if (!user) {
          return undefined;
        }
        const { sign_mail, password, ...restUser } = user;
        return restUser;
      });
    }
    return db('user').where({ id }).first();
  }

function login(sign_mail, password) {
    return db('user')
        .where({ sign_mail: sign_mail })
        .where({ password: password })
        .first()
        .then(user => {
            if (user) {
                const { sign_mail, password, ...rest } = user;
                return Promise.resolve(rest);
            } else {
                return Promise.reject({
                    statusCode: 404,
                    errorMessage: "Hatalı mail yada şifre!"
                });
            }
        });
}


function addUser(newUser, currentUserRole) {
    if (currentUserRole !== 'admin') {
        return Promise.reject({
            statusCode: 401,
            errorMessage: "Unauthorized, only admin users can add new users"
        });
    }
    const crypted_password = helper.crypto(newUser.password);
    newUser.password = crypted_password;
    console.log("şifre: ", newUser.password);
    return db('user')
        .insert(newUser)
        .returning('*')
        .then(([addedUser]) => {
            return addedUser;
        });
}

function updateUser(updatedUser, id, currentUserRole) {
    if (currentUserRole !== 'admin') {
        // Only update the fields other than 'role', 'sign_mail', and 'password'
        const allowedUpdates = ['first_name', 'last_name', 'age', 'email', 'user_image', 'social_links', 'introduction', 'description', 'medias', 'marked_projects', 'marked_blogs', 'experiences', 'education', 'skills'];
        const filteredUpdates = Object.keys(updatedUser)
            .filter(key => allowedUpdates.includes(key))
            .reduce((obj, key) => {
                obj[key] = updatedUser[key];
                return obj;
            }, {});

        return db('user')
            .update(filteredUpdates)
            .where({ id })
            .then(updated => {
                if (updated) {
                    return db('user').where({ id }).first();
                }
            });
    } else {
        // Admin can update all fields
        return db('user')
            .update(updatedUser)
            .where({ id })
            .then(updated => {
                if (updated) {
                    return db('user').where({ id }).first();
                }
            });
    }
}

//.where kullanmazsak büütün User isimleri günceller yada siler
function deleteUser(id, currentUserRole) {
    if (currentUserRole !== 'admin') {
        return Promise.reject({
            statusCode: 401,
            errorMessage: "Sadece yetkili kullanıcılar silebilir!"
        });
    }
    return db('user').del().where({ id });
}