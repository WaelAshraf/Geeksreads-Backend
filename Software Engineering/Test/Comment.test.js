
const request = require('supertest');
var app = require('../DB').app;
it("Invalid comment Body add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
        "Body":"!"
        ,"BookId":"5c911452bbfd1717b8a7a169"
        , "ReviewId":"5c9243a5311a20ca08d1844d"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"date":"2008-09-15T15:53:00"
        })
    .expect(400,done);
});
it("Invalid comment userId add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
        "Body":"Hello World!"
        ,"BookId":"5c911452bbfd1717b8a7a169"
        , "ReviewId":"5c9243a5311a20ca08d1844d"
        ,"userId":"5cb6067bd42e9b00173fa1fcl"
        ,"date":"2008-09-15T15:53:00"
        })
    .expect(400,done);
});
it("Invalid comment BookId add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
        "Body":"Hello World!"
        ,"BookId":"5c911452bbfd1717b8a7ak"
        , "ReviewId":"5c9243a5311a20ca08d1844d"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"date":"2008-09-15T15:53:00"
        })
    .expect(400,done);
});
it("Invalid comment ReviewId add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
        "Body":"Hello World!"
        ,"BookId":"5c911452bbfd1717b8a7a169"
        , "ReviewId":"5c9243a5311a20ca08d18"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"date":"2008-09-15T15:53:00"
        })
    .expect(400,done);
});
it("Invalid comment date add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
        "Body":"Hello World!"
        ,"BookId":"5c911452bbfd1717b8a7a169"
        , "ReviewId":"5c9243a5311a20ca08d1844d"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"date":"15-15"
        })
    .expect(400,done);
});
it("Valid Request add comment",  (done) => {
    request(app)
     .post('/api/comments')
     .send({
            "Body":"Hello World!"
            ,"BookId":"5c911452bbfd1717b8a7a169"
        , "ReviewId":"5cc5c3aa9b73a59ac0f2c203"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"date":"2008-09-15T15:53:00"
        })
    .expect(200,done);
});
it("invalid ReviewId get comments",  (done) => {
    request(app)
     .get('/api/comments')
     .send({
        "ReviewId":"5c9243a5beb4101160e23f"
        })
    .expect(400,done);
});
it("Valid ReviewId get comments",  (done) => {
    request(app)
     .get('/api/comments')
     .send({
        "ReviewId":"5cc59a85267d4b9050f94b53"
        })
    .expect(200,done);
});

it("Not found ReviewId get comments",  (done) => {
    request(app)
     .get('/api/comments')
     .send({
        "ReviewId":"5c9243a5beb4101160e30fdd"
        })
    .expect(404,done);
});