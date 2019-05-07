const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Get info about book by title,isbn,authorid (invalid)", (done) => { //Test for an invalid book ID to fetch 
    request(app) //sends request to server
        .get('/api/book/author')//Define request as post  specific end point
        .query({ //adds Request Paramters 
            search_param: "book 551"
        })
        .expect(404, done);//expects status 404 to pass test 
});



it("Get info about book by title,isbn,authorid (valid)", (done) => { //Test for an valid  Request
    request(app)// imports server app
        .get('/api/book/author')//Define request as post 
        .query({ //sends request to server
            search_param: "5c911452938ffea87b4672d7"
        })
        .expect(200, done);//expects status 200 to pass test 
});
it("Get info about book by title,isbn,authorid (valid)", (done) => { //Test for an valid  Request
    request(app)// imports server app
        .get('/api/book/author')//Define request as post 
        .query({ //sends request to server
            search_param: "5c911452ce18b2b3276d4b45"
        })
        .expect(200, done);//expects status 200 to pass test 
});
it("Get info about book by title,isbn,authorid (valid)", (done) => { //Test for an valid  Request
    request(app)// imports server app
        .get('/api/book/author')//Define request as post 
        .query({ //sends request to server
            search_param: "sit"
        })
        .expect(200, done);//expects status 200 to pass test 
});