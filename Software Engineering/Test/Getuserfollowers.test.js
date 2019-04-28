
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Getting User's Followers (invalid)",  (done) => { //Test for an invalid User ID  
    request(app) //sends request to server
     .post('/api/Users/getfollowers')//Define request as post  specific end point
     .query({ //adds Request Paramters 
        "user_id":"55"
        })
    .expect(404,done);//expects status 404 to pass test 
});



it("Getting User's Followers (successfull)",  (done) => { //Test for an valid  Request
    request(app)// imports server app
     .post('/api/Users/getfollowers')//Define request as post 
     .query({ //sends request to server
        user_id:"5c9132dd979e3e03f3f6c10a"
        })
    .expect(200,done);//expects status 200 to pass test 
});
