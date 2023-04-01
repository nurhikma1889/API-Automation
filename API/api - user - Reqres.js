const httpCaller = require('supertest');
const reqresAPI = httpCaller('https://reqres.in/api/');

function createuser(username,userjob){
return reqresAPI
    .post('users')
    .send({
    "name": username,
    "job": userjob
    });

};

module.exports = {
    createuser,
};