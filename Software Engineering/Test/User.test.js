const request = require('supertest');
var app = require('../DB').app;

it("Invalid Email Sign Up",  (done) => {
    request(app)
     .post('/api/Users/SignUp')
     .send({
             "UserName": "sad",
             "UserEmail": "samersostagmail.com",
             "UserPassword": "123456"
        })
    .expect(400,done);
});
it("Invalid Email Login",  (done) => {
    request(app)
     .post('/api/Auth/')
     .send({
             "UserEmail": "samersostagmail.com",
             "UserPassword": "123456"
        })
    .expect(400,done);
});
it("Invalid Name Sign Up",  (done) => {
    request(app)
     .post('/api/Users/SignUp')
     .send({
             "UserName": "sa",
             "UserEmail": "samersosta@gmail.com",
             "UserPassword": "123456"
        })
    .expect(400,done);
});
 it("Unverified User",  (done) => {
     request(app)
      .post('/api/Auth/')
      .send({
              "UserEmail": "samersosta@hotmail.com",
              "UserPassword": "123456"
         })
     .expect(401,done);
 });
 it("Send Verification Email",  (done) => {
     request(app)
      .post('/api/Users/SignUp')
      .send({
              "UserName": "Saad",
              "UserEmail": "AhmedSaad@nice.com",
              "UserPassword": "123456"
         })
     .expect(200,done);
 })
 it("Login Succefully",  (done) => {
     request(app)
      .post('/api/Auth/')
      .send({
              "UserEmail": "samersosta@gmail.com",
              "UserPassword": "123456"
         })
     .expect(200,done);
})

it("Invalid New Name",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserInfo')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserName":"Mo",
       "NewUserBirthDate":"1998-06-26T23:28:56.82Z",
       "NewUserPhoto":"https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/43138818_2209059502469111_5941362194816958464_n.jpg?_nc_cat=102&_nc_ht=scontent-hbe1-1.xx&oh=0ab9d30107706dbf2b94a8f77711cfc7&oe=5D6E0420"
        })
    .expect(400,done);
});
it("Invalid New Date",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserInfo')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserName":"Moh",
       "NewUserBirthDate":"",
       "NewUserPhoto":"https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/43138818_2209059502469111_5941362194816958464_n.jpg?_nc_cat=102&_nc_ht=scontent-hbe1-1.xx&oh=0ab9d30107706dbf2b94a8f77711cfc7&oe=5D6E0420"
        })
    .expect(400,done);
});
it("Invalid New Photo",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserInfo')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserName":"Moh",
       "NewUserBirthDate":"1998-06-26T23:28:56.82Z",
       "NewUserPhoto":"DD"
        })
    .expect(400,done);
});
it("Info Updated",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserInfo')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserName":"Moh",
       "NewUserBirthDate":"1998-06-26T23:28:56.82Z",
       "NewUserPhoto":"https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/43138818_2209059502469111_5941362194816958464_n.jpg?_nc_cat=102&_nc_ht=scontent-hbe1-1.xx&oh=0ab9d30107706dbf2b94a8f77711cfc7&oe=5D6E0420"
        })
    .expect(200,done);
});
it("Invalid New Password",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserPassword')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserPassword":"123",
       "OldUserPassword":"123456"
        })
    .expect(400,done);
});
it("Invalid old Password",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserPassword')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserPassword":"123456",
       "OldUserPassword":"123"
        })
    .expect(400,done);
});
it("Password Updated",  (done) => {
    request(app)
     .post('/api/Users/UpdateUserPassword')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "NewUserPassword":"123456",
       "OldUserPassword":"234567"
        })
    .expect(200,done);
});
it("Invalid User Id",  (done) => {
    request(app)
     .post('/api/Users/GetUserById')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "UserId":"BlaBlaBla"
        })
    .expect(400,done);
});
it("gets User info by User Id",  (done) => {
    request(app)
     .post('/api/Users/GetUserById')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTY5ODA1NDQsImV4cCI6MTU1NzA2Njk0NH0.f3EknhSw40xRqVoKjMXWibKcyF691Be3LuMTjsdn3vM')
     .send({
       "UserId":"5cc5df8c2e9c5800172864c9"
        })
    .expect(200,done);
});
