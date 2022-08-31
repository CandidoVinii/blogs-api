const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyjwt(req, res, next) {
 const token = req.header('Authorization');
 if (!token) return res.status(401).send({ message: 'Token not found' });

 try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
 } catch (err) {
    return res.status(401).send({ message: 'Expired or invalid token' });
 }
}

module.exports = verifyjwt;
