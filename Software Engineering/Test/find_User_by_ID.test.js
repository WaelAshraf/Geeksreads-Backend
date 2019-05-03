const request = require('supertest');
var app = require('../DB').app;
it("Valid Get User by id request",  (done) => {
    request(app)
     .post('/api/Users/getUser')
     .send({
        "UserId":"5cb2086172e13a2aec72f68c"
   })
    .expect(200,done);
});
it("Invalid Get user by id request",  (done) => {
    request(app)
     .post('/api/Users/getUser')
     .send({
        "UserId":"5cb2086172e13a2aec72f68cpewpewpew"
   })
    .expect(400,done);
});