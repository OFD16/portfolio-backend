const jwt = require('jsonwebtoken');
const secretKey = 'Yog edici Omar KOdIr :D';

const generateAuthToken = (email, password) => {
    const payload = {
        mail: email,
        password: password
    };
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secretKey, options);
}

const verifyAuthToken = (token) => {
    return jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return { success: false, error };
        }
        return { success: true, decoded };
    });
}

const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    const result = verifyAuthToken(token);
    if (!result.success) {
        return res.status(401).json({ error: result.error.message });
    }
    req.user = result.decoded;
    next();
}

module.exports = {
    generateAuthToken,
    verifyAuthToken,
    authenticate
};