
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Following an Author(invalid)",  (done) => { //Test for an invalid Author ID to follow 
    request(app) //sends request to server
     .post('/api/Authors/Follow')//Define request as post  specific end point
     .query({ //adds Request Paramters 
        "myuserId":"1",
        "auth_id":"55"
        })
    .expect(404,done);//expects status 404 to pass test 
});



it("Following an author (successfull)",  (done) => { //Test for an valid Follow Request
    request(app)// imports server app
     .post('/api/Authors/Follow')//Define request as post 
     .query({ //sends request to server
        auth_id:"5c911452938ffea87b4672d7",
        myuserId:"5cb6067bd42e9b00173fa1fc"
        })
    .expect(404,done);//expects status 404 to pass test 
});
