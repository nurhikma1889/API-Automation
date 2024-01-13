const { expect } = require('chai');
const apiUser = require ('../API/api - user - Reqres')
const scenario = require('../Test Case/Test Case - Reqres');

describe('Test Suit - API User', async () => {
    it(scenario.testcaseAPI.scenario1, async () => {
        
        // test automation code  here 1

        const namaUser = 'morpheus 1223';
        const jobUser = 'leader';

        const response = await apiUser.createuser(namaUser,jobUser)
        console.log(response.status);
        console.log(response.body);

        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(namaUser);
        expect(response.body.job).to.equal(jobUser);
    });
});