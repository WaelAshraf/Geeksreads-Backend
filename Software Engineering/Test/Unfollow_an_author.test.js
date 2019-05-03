
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app;  // imports server app
it("unFollowing an Author(Successfull)",  (done) => {//Test for  valid unfollow request
    request(app)//sends request to server
     .post('/api/Authors/unFollow') //Define request as post to specific end point
     .query({ //adds Request Paramters 
        auth_id:"5c911452938ffea87b4672d7",
        myuserId:"5cb6067bd42e9b00173fa1fc"
        })
    .expect(200,done);//expects status 200 to pass test 
});

it("unFollowing an Author(invalid)",  (done) => {  //Test for an invalid Author ID to unfollow
    request(app) //sends request to server
     .post('/api/Authors/unFollow')//Define request as post  specific end point
     .query({//adds Request Paramters
        "myuserId":"1",
        "auth_id":"55"
        })
    .expect(404,done); //expects status 404 to pass test 
});
