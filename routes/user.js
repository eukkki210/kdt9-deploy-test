const express = require('express');
const cont = require('../controller/Cuser');
const router = express.Router();

router.get('/' , cont.main);

router.get('/signup', cont.getSignup);

router.post('/signup', cont.postSignup);

router.get('/signin', cont.getSignin);

router.post('/signin', cont.postSignin);

router.post('/profile', cont.postProfile);

router.post('/profile/edit', cont.editProfile);

router.post('/profile/delete', cont.deleteProfile);

router.get('/findAll', cont.findAll);

module.exports = router;