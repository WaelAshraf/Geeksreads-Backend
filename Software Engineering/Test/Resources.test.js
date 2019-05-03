const request = require('supertest');
var app = require('../DB').app;
it("Comment Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"!",
        "Type":"Comment"
        })
    .expect(404,done); 
});

it("Review Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":" ",
        "Type":"Rev"
        })
    .expect(404,done);
});
it("Comment Not Found",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"21",
        "Type":"Commt"
        })
    .expect(404,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review"
        })
    .expect(200,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment"
        })
    .expect(200,done);
});