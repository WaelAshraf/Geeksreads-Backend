const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Get info about multiple books by genre (invalid)", (done) => { //Test for an invalid book ID to fetch 
    request(app) //sends request to server
        .get('/api/book/bygenre')//Define request as post  specific end point
        .query({ //adds Request Paramters 
            Genre: "reality 101"
        })
        .expect(404, done);//expects status 404 to pass test 
});



it("Get info about multiple books by genre (valid)", (done) => { //Test for an valid  Request
    request(app)// imports server app
        .get('/api/book/bygenre')//Define request as post 
        .query({ //sends request to server
            Genre: "Thriller"
        })
        .expect(200, done);//expects status 200 to pass test 
});