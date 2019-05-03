const request = require('supertest');
var app = require('../DB').app;
it("Valid Get User request",  (done) => {
    request(app)
     .post('/api/Users/getUser')
     .send({
        "UserId":"5cb2086172e13a2aec72f68c"
   })
    .expect(200,done);
});
it("Invalid Remove review request",  (done) => {
    request(app)
     .post('/api/Users/getUser')
     .send({
        "UserId":"5cb2086172e13a2aec72f68cpewpewpew"
   })
    .expect(400,done);
});