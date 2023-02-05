const db = require('../db-config');

module.exports = {
    getProjects,
    getProjectByID,
    addProject,
    updateProject,
    deleteProject,
}

function getProjects() {
    return db('project');  // db.select('User'); same
}

function getProjectByID(id) {
    return db('project').where({ id }).first();
}

function addProject(newProject) {

    return db('project')
        .insert(newProject)
        .returning('*')
        .then(([addedProject]) => {
            return addedProject;
        });
}

function updateProject(updatedProject, id) {
    return db('project')
        .update(updatedProject)
        .where({ id })
        .then(updated => {
            if (updated) {
                return db('project').where({ id }).first();
            }
        })
}

//.where kullanmazsak büütün User isimleri günceller yada siler
function deleteProject(id) {
    return db('project').del().where({ id });
}