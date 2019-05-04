const request = require('supertest');
var app = require('../DB').app;
it("Valid Add review request",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c911452bbfd1717b8a7a169"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"rating":"0"


    })
    .expect(200,done);
});
it("Invalid Add review Body",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"HEHE"
        ,"bookId":"5c911452bbfd1717b8a7a169"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review bookId",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c911452bbfd1717b8a7"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review userId",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c911452bbfd1717b8a7a169"
        ,"userId":"5cb6067bd42e9b00173"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review Date",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c911452bbfd1717b8a7a169"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
        ,"reviewDate":"balalalalalala"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Valid Remove review request",  (done) => {
    request(app)
     .post('/api/review/remove')
     .send({
        "reviewId":"5cc5ddedd737148c1842b7dd"
   })
    .expect(200,done);
});
it("Invalid Remove review request",  (done) => {
    request(app)
     .post('/api/review/remove')
     .send({
        "reviewId":"5cc5ddedd737148c1842b7dddumbadadum"
   })
    .expect(400,done);
});
/* bookId 5c911452bbfd1717b8a7a169
rating 3
userId  5cb6067bd42e9b00173fa1fc
*/
it("Valid Rate request",  (done) => {
    request(app)
     .post('/api/review/rate')
     .send({
        "bookId":"5c911452bbfd1717b8a7a169"
        , "rating":"3"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("Invalid Rate request bookId",  (done) => {
    request(app)
     .post('/api/review/rate')
     .send({
        "bookId":"5c911452bbfd1717b8a"
        , "rating":"3"
        ,"userId":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("Invalid Rate request userId",  (done) => {
    request(app)
     .post('/api/review/rate')
     .send({
        "bookId":"5c911452bbfd1717b8a7a169"
        , "rating":"3"
        ,"userId":"5cb6067bd42e9b00173"
   })
    .expect(404,done);
});
it("Valid edit review by Id request",  (done) => {
    request(app)
     .post('/api/review/editRevById')
     .send({
        "reviewId":"5cc59a85267d4b9050f94b53"
        ,"reviewBody":"Edited By Test"
   })
    .expect(200,done);
});
it("Invalid edit review by Id request",  (done) => {
    request(app)
     .post('/api/review/editRevById')
     .send({
        "reviewId":"5cc59a85267d4b9050f"
        ,"reviewBody":"Edited By Test"
   })
    .expect(404,done);
});
it("Valid getrev request",  (done) => {
    request(app)
     .get('/api/review/getrev')
     .send({
        "bookId":"5c9114a0d345b4a65637eacc"
        ,"UserId":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("Invalid getrev request UserId",  (done) => {
    request(app)
     .get('/api/review/getrev')
     .send({
        "bookId":"5c9114a0d345b4a65637eacc"
        ,"UserId":"5cb6067bd42e9b00173fa1fcpapapapapapapap"
   })
    .expect(400,done);
});
it("Invalid getrev request bookId",  (done) => {
    request(app)
     .get('/api/review/getrev')
     .send({
        "bookId":"5c9114a0d345b4a65637eaccpapapappa"
        ,"UserId":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(400,done);
});