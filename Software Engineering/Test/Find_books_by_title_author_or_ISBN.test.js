var app = require("../DB").app;
const request = require("supertest");
/////////////////////////////////////////////////////////////////////
//find books test
////////////////////////////////////////////////////////////////////
//check the validations of the requests  
it("can't accept requests with missing required argument", (done) => {
    request(app)
        .get("/api/book/find")
        .send({})
        .expect(400)
        .end(done)
});
//check the validations of the requests  
it("can't accept requests with wrong argument", (done) => {
    request(app)
        .get("/api/book/find")
        .send({ "search_param ": "155" })
        .expect(400)
        .end(done)
});
it("Valid request for finding book using AuthorId", (done) => {
    request(app)
        .get("/api/book/find")
        .send({ "search_param": "5c911452938ffea87b4672d7" })
        .expect(200)
        .end(done)
}); 
it("Valid request for finding book using ISBN", (done) => {
    request(app)
        .get("/api/book/find")
        .send({ "search_param": "5c911452f03269139ce699af" })
        .expect(200)
        .end(done)
}); 
it("Valid request for finding book using Title", (done) => {
    request(app)
        .get("/api/book/find")
        .send({ "search_param": "sit" })
        .expect(200)
        .end(done)
}); 