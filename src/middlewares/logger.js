module.exports = (req, res, next) => {
    //middleWare ler 3 parametre alıyor sırası önemli!
    //Birde hataları yakalayan middlwWare ler var onlarda 4 parametre alır.
    console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    next();
};