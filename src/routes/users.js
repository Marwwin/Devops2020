const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const checkAuth = require('../middleware/check-auth');


router.get('/', (req, res, next) => {
    User.find().exec()
        .then(documents => {
            res.status(200).json(documents);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;

            next(err);
        });
});


router.delete('/:id', checkAuth, (req, res, next) => {
    User.remove({ _id: req.params.id }).exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted",
            })
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;

            next(err);
        });
});




router.post('/signup', (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                message: err
            });
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.email,
                password: hash,
            });

            user.save()
                .then(result => {
                    res.status(201).json({
                        message: "User registered!"
                    });
                })
                .catch(error => {
                    console.log(error);
                    const err = new Error(error);
                    err.status = error.status || 500;

                    next(err);
                });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.find({ username: req.body.username }).exec()
        .then(user => {
            if (user.length < 1) {
                authErr(res);
            }

            else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        authErr(res);
                    }

                    else if (result) {
                        //Generera en JWT för användaren
                        const token = jwt.sign({
                            username: user[0].username,
                            userId: user[0]._id
                        },
                            "secret",
                            { expiresIn: "6h" });

                        res.status(200).json({
                            message: "Authenctication successful",
                            token: token
                        });
                    }

                    else {
                        authErr(res);
                    }
                })
            }
        })
        .catch(error => {
            authErr(res);
        });
});

function authErr(res) {

    return res.status(401).json({
        message: "Authentication failed (check your email and password)"
    });
}

module.exports = router;