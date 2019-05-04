const request = require('supertest');
var app = require('../DB').app;

it("Book Id Does't Exist in User Shelves",  (done) => {
    request(app)
     .get('/api/Users/GetBookReadStatus')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "BookId":"Book" })
    .expect(400,done);
});
it("Book Exist in one of User Shelves",  (done) => {
    request(app)
     .get('/api/Users/GetBookReadStatus')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "BookId":"Book1" })
    .expect(200,done);
});
it("Invalid User Id",  (done) => {
    request(app)
     .get('/api/Users/GetUserReadDetails')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "UserId":"BlaBlaBla" })
    .expect(400,done);
});
it("get Shelf Details By UserId",  (done) => {
    request(app)
     .get('/api/Users/GetUserReadDetails')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "UserId":"5cc5df8c2e9c5800172864c9" })
    .expect(200,done);
});
it("get Shelf Count By UserId",  (done) => {
    request(app)
     .get('/api/Users/ShelvesCount')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "UserId":"5cc5df8c2e9c5800172864c9" })
    .expect(200,done);
});
it("Invalid User Id",  (done) => {
    request(app)
     .get('/api/Users/SelvesCount')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "UserId":"BlaBlaBla" })
    .expect(400,done);
});
it("Add Book to shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "ShelfType":"Read","BookId":"5c911573d03a6fe10721f417" })
    .expect(200,done);
});
it("Invalid Shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "ShelfType":"NaN","BookId":"5c911573d03a6fe10721f417" })
    .expect(400,done);
});
it("Invalid BookId",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "ShelfType":"Read","BookId":"NaN" })
    .expect(400,done);
});
it("Book Already in Shelf",  (done) => {
    request(app)
     .get('/api/Users/AddToShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({ "ShelfType":"Read","BookId":"5c9114524cd3614ea10aca05" })
    .expect(400,done);
});
it("Remove Book from shelf",  (done) => {
    request(app)
     .get('/api/Users/RemoveFromShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({"BookId":"5c9114a01c049771a04cbce4" })
    .expect(200,done);
});
it("Invalid BookId",  (done) => {
    request(app)
     .get('/api/Users/RemoveFromShelf')
     .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E5MDc2MDRmOWZhNTNjYzQ0Y2JlY2MiLCJpYXQiOjE1NTQ1ODEzNDV9.CbaF0pOQBoe7lu2ofdxtWmmA9NpqaDTY2TGVScIcCB4')
     .send({"BookId":"NaN" })
    .expect(400,done);
});
