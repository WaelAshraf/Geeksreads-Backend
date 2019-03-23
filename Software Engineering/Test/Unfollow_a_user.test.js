
const request = require('supertest');
var app = require('../DB').app;
it("UNFollow Successfull",  (done) => {
    request(app)
     .post('/api/Users/unFollow')
     .send({
        userId_tobefollowed:"5c9132dd04ea424bf938e8f8",
        myuserid:"5c9132dd0a604ca6b1f34117"
        })
    .expect(200,done);
});

it("User Not Found (UNfollow)",  (done) => {
    request(app)
     .post('/api/Users/unFollow')
     .send({
        "myuserid":"1",
        "userId_tobefollowed":"55"
        })
    .expect(404,done);
});
