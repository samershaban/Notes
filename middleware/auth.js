const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Acces denied, No user logged in.');

    try{
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(400).send('Invalid token')
    }
}
