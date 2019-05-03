
const request = require('supertest'); //imports supertest framework
var app = require('../DB').app; // imports server app
it("Following a User(invalid)",  (done) => { //Test for an invalid user ID to follow 
    request(app) //sends request to server
     .post('/api/Users/Follow')//Define request as post  specific end point
     .query({ //adds Request Paramters 
        "myuserid":"1",
        "userId_tobefollowed":"55"
        })
    .expect(404,done);//expects status 404 to pass test 
});



it("Following a user(already followed)",  (done) => { //Test for an valid Follow Request
    request(app)// imports server app
     .post('/api/Users/Follow')//Define request as post 
     .query({ //sends request to server
        userId_tobefollowed:"5cb60a0ad42e9b00173fa1fd",
        myuserid:"5cb6067bd42e9b00173fa1fc"
        })
    .expect(200,done);//expects status 200 to pass test 
});
