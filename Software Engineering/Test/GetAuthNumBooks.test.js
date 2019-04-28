
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Getting an Authors Number of books(invalid)",  (done) => { //Test for an invalid Author ID  
    request(app) //sends request to server
     .post('/api/Authors/numbooks')//Define request as post  specific end point
     .query({ //adds Request Paramters 
        "auth_id":"55"
        })
    .expect(404,done);//expects status 404 to pass test 
});



it("Getting an Authors Number of books(successfull)",  (done) => { //Test for an valid  Request
    request(app)// imports server app
     .post('/api/Authors/numbooks')//Define request as post 
     .query({ //sends request to server
        auth_id:"5c9115731d3c81c7075b6577"
        })
    .expect(200,done);//expects status 200 to pass test 
});
