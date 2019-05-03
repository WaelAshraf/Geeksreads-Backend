const request = require('supertest');
var app = require('../DB').app;
it("Valid Add review request",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c9243a5beb4101160e23fdd"
        ,"userId":"5c9620083a3c692cd445a32a"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"shelf":"dumDum"
        ,"rating":"0"


    })
    .expect(200,done);
});
it("Invalid Add review Body",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"HEHE"
        ,"bookId":"5c9243a5beb4101160e23fdd"
        ,"userId":"5c9620083a3c692cd445a32a"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"shelf":"dumDum"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review bookId",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c9243a5beb4101160e23f"
        ,"userId":"5c9620083a3c692cd445a32a"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"shelf":"dumDum"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review userId",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c9243a5beb4101160e23fdd"
        ,"userId":"5c9620083a3c692cd4432a"
        ,"reviewDate":"2008-09-15T15:53:00"
        ,"shelf":"dumDum"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Invalid Add review Date",  (done) => {
    request(app)
     .post('/api/review/add')
     .send({
        "reviewBody":"TEEEST"
        ,"bookId":"5c9243a5beb4101160e23fdd"
        ,"userId":"5c9620083a3c692cd445a32a"
        ,"reviewDate":"dam bada dam"
        ,"shelf":"dumDum"
        ,"rating":"0"


    })
    .expect(400,done);
});
it("Valid Remove review request",  (done) => {
    request(app)
     .post('/api/review/remove')
     .send({
        "ReviewId":"5cb2086172e13a2aec72f68c"
   })
    .expect(200,done);
});
it("Invalid Remove review request",  (done) => {
    request(app)
     .post('/api/review/remove')
     .send({
        "ReviewId":"5cb2086172e13a2aec72f68cpewpewpew"
   })
    .expect(400,done);
});

it("Valid Remove review request",  (done) => {
    request(app)
     .post('/api/review/getReview')
     .send({
        "reviewId":"5c9243a5311a20ca08d1844d"
   })
    .expect(200,done);
});
it("Invalid Remove review request",  (done) => {
    request(app)
     .post('/api/review/getReview')
     .send({
        "reviewId":"5cb2086172e13a2aec72f68cpewpewpew"
   })
    .expect(400,done);
});