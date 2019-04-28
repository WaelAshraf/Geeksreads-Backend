
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Show Author Following Info (invalid)",  (done) => { //Test for an invalid User ID  
    request(app) //sends request to server
     .post('/api/Authors/isfollowed')//Define request as post  specific end point
     .query({ //adds Request Paramters 
        "user_id":"55",
        "auth_id":"1"
        })
    .expect(404,done);//expects status 404 to pass test 
});



it("Show Author Following Info  (successfull)",  (done) => { //Test for an valid  Request
    request(app)// imports server app
     .post('/api/Authors/isfollowed')//Define request as post 
     .query({ //sends request to server
        user_id:"5c9132dd1329f39668ab456a",
        auth_id:"5c911452a712cdfa45e82517"
        })
    .expect(200,done);//expects status 200 to pass test 
});
