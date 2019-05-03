var app = require("../DB").app;
const request = require("supertest");
var {CreatNotification} = require("../models/Notifications");
var {CreatStatusese} = require("../models/Statuses");
const expect= require("expect");
/////////////////////////////////////////////////////////////////////
//Update statuses request Tests
////////////////////////////////////////////////////////////////////
//check the validations of the requests  
describe('Statuses',()=>{

    describe('Update Statuses',()=>{
it("can't accept requests with missing required argument",(done)=>
 {
     request(app)
     .post("/api/user_status/")
     .send ({"StatusId ":"56565"})
     .expect(400)
     .end(done)
    }) ;
//check the validations of the requests
 it("Update can't accept requests with false parmeters",(done)=>
 {
     request(app)
     .post("/api/user_status/")
     .send ({"BookId ":"1989"})
     .expect(400)
     .end(done)
 }); 
 //check the behavior of the requests on the datatbase
 it("Normal acceptance for update",(done)=>
 {
     request(app)
     .post("/api/user_status/")
     .send ({
        "StatusId":"1ss998",
         "UserId":"28938983",
         "ReviewId":"83939839",
        "StatusBody":"Hsis likes a comment"
        })
     .expect(200)
     .end(done)
 });
});
////////////////////////////////////////////////////////////////////
//get statuses request Tests
////////////////////////////////////////////////////////////////////
//check the validations of the requests  
describe("Get statuses", ()=>
{
it("can't accept requests with missing required argument",(done)=>
 {
     request(app)
     .get("/api/user_status/show")
     .query({})
     .expect(400)
     .end(done)
 }) ;
//check the validations of the requests  
it("can't accept requests with wrong argument",(done)=>
{
     request(app)
     .get("/api/user_status/show")
     .query ({"bookId ":"1989"})
     .expect(400)
     .end(done)
 }) ;
//check t
it("didn't find the status ",(done)=>
{
     request(app)
     .get("/api/user_status/show")
     .query({"StatusId":"198928"})
     .expect(404)
     .end(done)
 }) ;
//the resopnse of the right request 
 
it("Normal acceptance for show",(done)=>
{
    request(app)
    .get("/api/user_status/show")
    .query({"StatusId":"198998"})// already exicting data
    .expect(200)
    .end(done)
}); 

});
//remove statuses request Tests
////////////////////////////////////////////////////////////////////
//check the validations of the requests
describe("Remove", ()=>
{


it("can't accept requests with missing required argument for delete",(done)=>
 {
     request(app)
     .post("/api/user_status/delete")
     .send ({})
     .expect(400)
     .end(done)
 }) ;
//check the validations of the requests  
it("can't accept requests with wrong argument for delete",(done)=>
{
     request(app)
     .post("/api/user_status/delete")
     .send ({"bookId ":"1989"})
     .expect(400)
     .end(done)
 }) ;
//check t
it("didn't find the status for delete",(done)=>
{
     request(app)
     .post("/api/user_status/delete")
     .send({"StatusId":"198928"})
     .expect(404)
     .end(done)
 }) ;
//the resopnse of the right request 
 
it("Normal acceptance for delete",(done)=>
{
    request(app)
    .post("/api/user_status/delete")
    .send({"StatusId":"198998"})// already exicting data
    .expect(200)
    .end(done)
}); 
});
});
describe ("Notifications", ()=>
{
    describe("Get Notification",()=>
    {

    });
    describe (" Make it Seen",()=>
    {

    });
    describe (" The Function",()=>
    {
       it("Refused Worong Types",()=>
       {
           var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, " ", "5cb6067bd42e9b00173fa1fc" , null );
        console.log(x);
           expect(x).toBe("WrongType");
       })



    });
});