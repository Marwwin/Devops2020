const jwt = require('jsonwebtoken');
const user = require('../models/user');

module.exports = (req, res, next) => {
        
    try
    {
        const decoded = jwt.verify(req.header('authorization'), "secret");
        console.log(decoded);
    
        next();
    }

    catch(error)
    {
        res.status(401).json({
            message: "Authentication failed"
        });
    }


};

