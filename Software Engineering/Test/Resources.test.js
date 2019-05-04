const request = require('supertest');
var app = require('../DB').app;
/*it("Comment Not Found ",  (done) => {
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
// ------------ unlike test------------
it("Comment Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"!",
        "Type":"Comment"
        })
    .expect(404,done);
});

it("Review Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":" ",
        "Type":"Rev"
        })
    .expect(404,done);
});
it("Comment Not Found",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"21",
        "Type":"Commt"
        })
    .expect(404,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review"
        })
    .expect(200,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment"
        })
    .expect(200,done);
});*/
it("Valid Review Like",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("invalid Review Like invalid resource",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("invalid Review Like invalid user",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9"
   })
    .expect(404,done);
});
//-----------------------------------------------------
it("Valid Comments Like",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("invalid Comments Like invalid resource",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c924677ea0068fca04",
        "Type":"Comment",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("invalid Comments Like invalid user",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment",
        "User_Id":"5cb60673fa1fc"
   })
    .expect(404,done);
});
//-------------------------Unlike-------------------------------
it("Valid Review unlike",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("invalid Review unlike invalid resource",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c9243a5311a20ca",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("invalid Review unlike invalid user",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9"
   })
    .expect(404,done);
});
//-----------------------------------------------------
it("Valid Comments unlike",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(200,done);
});
it("invalid Comments unlike invalid resource",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c924677ea0068fca04",
        "Type":"Comment",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("invalid Comments unlike invalid user",  (done) => {
    request(app)
     .post('/api/Resources/unlike')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment",
        "User_Id":"5cb60673fa1fc"
   })
    .expect(404,done);
});
