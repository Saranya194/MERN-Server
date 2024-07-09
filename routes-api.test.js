const app = require('./index');
const request =require('supertest');
describe('GET /users ',()=>{
    test('Get users from /user api',async()=>{
        const res = await request(app)
        .get('/users')
        .expect(200);
        console.log(res.body.getAllUsers[0]);
        const data=res.body;
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('_id');

        })
    })

})