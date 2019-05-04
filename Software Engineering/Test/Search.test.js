const request = require('supertest');
var app = require('../DB').app;
it("partial Search test",  (done) => {
    request(app)
     .get('/api/search/')
     .query({search_param : "Noe"})
    .expect(200,done);
});
it("invalid partial Search test",  (done) => {
    request(app)
     .get('/api/search/')
     .query()
    .expect(404,done);
});