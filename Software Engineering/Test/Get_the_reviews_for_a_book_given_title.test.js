const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Get book reviews using its own title (invalid)", (done) => { //Test for an invalid book ID to fetch 
    request(app) //sends request to server
        .get('/api/book/reviewbytitle')//Define request as post  specific end point
        .query({ //adds Request Paramters 
            book_title: "mohammed 21"
        })
        .expect(404, done);//expects status 404 to pass test 
});



it("Get book reviews using its own title (valid)", (done) => { //Test for an valid  Request
    request(app)// imports server app
        .get('/api/book/reviewbytitle')//Define request as post 
        .query({ //sends request to server
            book_title: "sit"
        })
        .expect(200, done);//expects status 200 to pass test 
});