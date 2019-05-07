const request = require('supertest');
var app = require('../DB').app;

it("Book Id Does't Exist in User Shelves",  (done) => {
    request(app)
     .get('/api/Users/GetBookReadStatus')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "BookId":"Book" })
    .expect(400,done);
});
it("Book Exist in one of User Shelves",  (done) => {
    request(app)
     .get('/api/Users/GetBookReadStatus')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "BookId":"5c911573935b9f236f6ff400" })
    .expect(200,done);
});
it("Invalid User Id",  (done) => {
    request(app)
     .get('/api/Users/GetUserReadDetails')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "UserId":"BlaBlaBla" })
    .expect(400,done);
});
it("get Shelf Details By UserId",  (done) => {
    request(app)
     .get('/api/Users/GetUserReadDetails')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "UserId":"5cc5df8c2e9c5800172864c9" })
    .expect(200,done);
});
it("get Shelf Count By UserId",  (done) => {
    request(app)
     .get('/api/Users/ShelvesCount')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "UserId":"5cc5df8c2e9c5800172864c9" })
    .expect(200,done);
});
it("Invalid User Id",  (done) => {
    request(app)
     .get('/api/Users/SelvesCount')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "UserId":"BlaBlaBla" })
    .expect(400,done);
});
it("Add Book to shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "ShelfType":"Read","BookId":"5c911573d03a6fe10721f417" })
    .expect(200,done);
});
it("Invalid Shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "ShelfType":"NaN","BookId":"5c911573d03a6fe10721f417" })
    .expect(400,done);
});
it("Invalid BookId",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "ShelfType":"Read","BookId":"NaN" })
    .expect(400,done);
});
it("Book Already in Shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({ "ShelfType":"Read","BookId":"5c9114524cd3614ea10aca05" })
    .expect(400,done);
});
it("Remove Book from shelf",  (done) => {
    request(app)
     .get('/api/Users/RemoveFromShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({"BookId":"5c911573d03a6fe10721f417" })
    .expect(200,done);
});
it("Invalid BookId",  (done) => {
    request(app)
     .get('/api/Users/RemoveFromShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M1ZGY4YzJlOWM1ODAwMTcyODY0YzkiLCJpYXQiOjE1NTcyNTE1NjMsImV4cCI6MTU1NzMzNzk2M30.Df1i2HepFXJ3C7rNAKzVf3kmL6hr2EqMxSMlWYBUZhM')
     .send({"BookId":"NaN" })
    .expect(400,done);
});
