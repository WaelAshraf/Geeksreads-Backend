
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app;  // imports server app
it("unFollowing a User(Successfull)",  (done) => {//Test for  valid unfollow request
    request(app)//sends request to server
     .post('/api/Users/unFollow') //Define request as post to specific end point
     .query({ //adds Request Paramters 
        userId_tobefollowed:"5cb60a0ad42e9b00173fa1fd",
        myuserid:"5cb6067bd42e9b00173fa1fc"
        })
    .expect(200,done);//expects status 200 to pass test 
});

it("unFollowing a User(invalid)",  (done) => {  //Test for an invalid user ID to unfollow
    request(app) //sends request to server
     .post('/api/Users/unFollow')//Define request as post  specific end point
     .query({//adds Request Paramters
        "myuserid":"1",
        "userId_tobefollowed":"55"
        })
    .expect(404,done); //expects status 404 to pass test 
});
