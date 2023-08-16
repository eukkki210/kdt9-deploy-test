const exp = require('constants');
const { User } = require('../models');
const { Op } = require('sequelize');

exports.main = (req, res) => {
    res.render('index');
}

exports.getSignup = (req, res) => {
    res.render('signup', { title: "회원가입" });
};

exports.getSignin = (req, res) => {
    res.render('signin', { title: '로그인' });
};

exports.postSignup = (req, res) => {
    const { userid, name, pw } = req.body;

    User.create({ userid, name, pw })
        .then(() => {
            res.send({ result: true });
        })
};

exports.postSignin = (req, res) => {
    const { userid, pw } = req.body;

    User.findOne({ where: { userid, pw } })
        .then(data => {
            res.send({ result: true, data });
        });
};

exports.postProfile = (req, res) => {
    const { userid, pw } = req.body;

    User.findOne({ where: { userid, pw } })
        .then(userInfo => {
            res.render('profile', { title: "프로필", userInfo });
        });
};

exports.editProfile = (req, res) => {
    const { id, userid, name, pw } = req.body;

    User.update({ userid, name, pw }, { where: { id } })
        .then(() => {
            res.send({ result: true });
        });
};

exports.deleteProfile = (req, res) => {
    const { id } = req.body;

    User.destroy({ where: { id } })
        .then(() => {
            res.send({ result: true });
        });
};

exports.findAll = (req, res) => {
    User.findAll(
        // attributes: 원하는 칼럼 조회
        {
            attributes: ['id', 'name', 'userid'],
            // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지 않은)
            // Op.or(도는), Op.in(배열 요소 중 하나), OP.notIn(배열 요소와 모두 다른) 
            where: { id: { [Op.gte]: 1 } },
            order: [['id', 'desc']],
            limit: 1,
            offset: 1
        }
    ).then(data => {
        res.send({ data });
    })
}