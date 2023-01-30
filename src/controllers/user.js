// const UserService = require('../services/user');
// const Helper = require('../scripts/helper');

// class UserController {
//     signup(req, res) {
//         UserService.create({
//             ...req.body, 
//             password: Helper.crypto(req.body.password)
//         });
//     }
//     login(req, res) {
//         UserService.login(req.body);
//     }
//     readUser(req, res) {
//         UserService.read(req.body);
//     }
//     updateUser(req, res) {
//         UserService.update(req.params.id, req.body);
//     }
//     deleteUser(req, res) {
//         UserService.delete(req.params.id);
//     }
// }

// module.exports = new UserController();