const db = require('../db-config');

module.exports = {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
    getProjectByID,
}

function getProjects() {
    return db('project');  // db.select('Project'); same
}

function getProjectByID(id) {
    return db('project').where({ id }).first();
}

function addProject(newProject) {
    return db('project')
        .insert(newProject, 'id')
        .then(([id]) => {
            return db('project').where({ id }).first();
        });
}

function updateProject(updatedProject, id) {
    return db('project')
        .update(updatedProject)
        .where({ id })
        .then(updated => {
            if (updated) {
                console.log(`updatedProject id: ${id} `, db('project').where({ id }).first());
                return db('project').where({ id }).first();
            }
        })
}

//.where kullanmazsak büütün Project isimleri günceller yada siler
function deleteProject(id) {
    console.log(`deleteProject id: ${id} `, db('project').del().where({ id }));
    return db('project').del().where({ id });
}