var app = require("../DB").app;
const request = require("supertest");
var {CreatNotification} = require("../models/Notifications");
var {CreatStatuses} = require("../models/Statuses");
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
        "UserId":"5cb6e10c00eecd0017c37b2c",
        "StatusType":"Comment",
        "ReviewIsLiked":false,
        "BookStatus":null,
        "StatusId":"5cccaa0d1d018326882245d9",
        "ReviewId":"5cc70e3fa5733545701e3167",
        "ReviewBody":"Hello Software!",
        "ReviewDate":"2008-09-15T12:53:00.000Z",
        "ReviewLikesCount":7,
        "ReviewMakerId":"5cb60a0ad42e9b00173fa1fd",
        "ReviewMakerName":"joejack",
        "ReviewMakerPhoto":"",
        "BookId":"5c9114526f1439874b7cca1a",
        "BookName":"consequat",
        "BookPhoto":"http://placehold.it/32x32",
        "AuthorId":"5c911452938ffea87b4672d7",
        "CommentId":"5cccaa0b1d018326882245d7",
        "CommentBody":"Hello Software!",
        "CommentDate":"2008-09-15T12:53:00.000Z",
        "CommentMakerId":"5cb6067bd42e9b00173fa1fc",
        "CommentMakerName":"ahmedsalah",
        "CommentMakerPhoto":""}) 
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

describe (" The Function",()=>
{
   it("Refused Worong Types",()=>
   {
       var x=CreatStatuses( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, " ", "5cb6067bd42e9b00173fa1fc" , null );
      h= Promise.resolve({"TypeSuccess": false });
      expect(x).toEqual(h);
   })
   it("Refused When the same person like himself",()=>
   {
       var x=CreatStatuses( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, "ReviewLike", "5cb63944711e440017db82b9" , null );
      h= Promise.resolve("No notification will be added for the same user");
      expect(x).toEqual(h);
   })


   it("Refused wrong Review Ids",()=>
   {
       var x=CreatStatuses( "5cb63944711e440017db82b9" ,"ss7" , null, "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
      h= Promise.resolve("Wrong review Id");
      expect(x).toEqual(h);
   })
   
   it("Refused Worong Types",()=>
   {
       var x=CreatStatuses( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , "ssd", "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
      h= Promise.resolve("Wrong comment Id");
      expect(x).toEqual(h);
   });
   it("Normal acceptance ",()=>
   {
       var x=CreatStatuses( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , "5ccd51457fbb394a343cc6b2", "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
      h= Promise.resolve("Success");
      expect(x).toEqual(h);
   });
   
   
});
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
          h= Promise.resolve("wrongType");
          expect(x).toEqual(h);
       })
       it("Refused When the same person like himself",()=>
       {
           var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, "ReviewLike", "5cb63944711e440017db82b9" , null );
          h= Promise.resolve("No notification will be added for the same user");
          expect(x).toEqual(h);
       })

       it("Refused wrong User Ids",()=>
       {
        var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, "ReviewLike", "hs" , null );
          h= Promise.resolve("Wrong User Id");
          expect(x).toEqual(h);
       })


       it("Refused wrong Review Ids",()=>
       {
           var x=CreatNotification( "5cb63944711e440017db82b9" ,"ss7" , null, "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
          h= Promise.resolve("Wrong review Id");
          expect(x).toEqual(h);
       })
       
       it("Refused Worong Types",()=>
       {
           var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , "ssd", "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
          h= Promise.resolve("Wrong comment Id");
          expect(x).toEqual(h);
       });
       it("Normal acceptance ",()=>
       {
           var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , "5ccd51457fbb394a343cc6b2", "Comment ", "5cb6067bd42e9b00173fa1fc" , null );
          h= Promise.resolve("Success");
          expect(x).toEqual(h);
       });
       
       it("accept when its follow",()=>
       {
        var x=CreatNotification( "5cb63944711e440017db82b9" ,"5cc70e3fa5733545701e3167" , null, "Follow", "5cb63944711e440017db82b9" , null );
          h= Promise.resolve({ "FolloWSuccess": true});
          expect(x).toEqual(h);
       })
    });
});