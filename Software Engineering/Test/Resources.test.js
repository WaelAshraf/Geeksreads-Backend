const request = require('supertest');
var app = require('../DB').app;
/*it("Comment Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"!",
        "Type":"Comment"
        })
    .expect(404,done);
});

it("Review Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":" ",
        "Type":"Rev"
        })
    .expect(404,done);
});
it("Comment Not Found",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"21",
        "Type":"Commt"
        })
    .expect(404,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review"
        })
    .expect(200,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/like')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment"
        })
    .expect(200,done);
});
// ------------ unlike test------------
it("Comment Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"!",
        "Type":"Comment"
        })
    .expect(404,done);
});

it("Review Not Found ",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":" ",
        "Type":"Rev"
        })
    .expect(404,done);
});
it("Comment Not Found",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"21",
        "Type":"Commt"
        })
    .expect(404,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"5c9243a5311a20ca08d1844d",
        "Type":"Review"
        })
    .expect(200,done);
});

it("valid Request",  (done) => {
    request(app)
     .put('/api/Resources/unlike')
     .send({
        "resourceId":"5c924677ea0068fca04580ec",
        "Type":"Comment"
        })
    .expect(200,done);
});*/
describe("resources",()=>
{
    describe("LIKE",()=>
{
it("No resourceID",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(400,done);
});

it("No UserID",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"dsddf",
        "Type":"Review",
        
   })
    .expect(400,done);
});
it("No Type",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"dsddf",
        "User_Id":"dsjdkj"
   })
    .expect(400,done);
});


it("invalid  resource Id",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5c9243a5311a20ca",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9b00173fa1fc"
   })
    .expect(404,done);
});
it("invalid Review Like invalid user",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5cc70e3fa5733545701e3167",
        "Type":"Review",
        "User_Id":"5cb6067bd42e9"
   })
    .expect(404,done);
});
    
it("valid Review Like ",  (done) => {
    request(app)
     .post('/api/Resources/like')
     .send({
        "resourceId":"5cc70e3fa5733545701e3167",
        "Type":"Review",
        "User_Id":"5cb60a0ad42e9b00173fa1fd"
   })
    .expect(200,done);
});
    it("invalid Review Like twice",  (done) => {
        request(app)
         .post('/api/Resources/like')
         .send({
            "resourceId":"5cc70e3fa5733545701e3167",
            "Type":"Review",
            "User_Id":"5cb60a0ad42e9b00173fa1fd"
       })
        .expect(401,done);
        
});
})
//-----------------------------------------------------
//-------------------------Unlike-------------------------------
describe("UnLIKE",()=>
{
    it("No resourceID",  (done) => {
        request(app)
         .post('/api/Resources/unlike')
         .send({
            
            "Type":"Review",
            "User_Id":"5cb6067bd42e9b00173fa1fc"
       })
        .expect(400,done);
    });
    
    it("No UserID",  (done) => {
        request(app)
         .post('/api/Resources/unlike')
         .send({
            "resourceId":"dsddf",
            "Type":"Review",
            
       })
        .expect(400,done);
    });
    it("No Type",  (done) => {
        request(app)
         .post('/api/Resources/unlike')
         .send({
            "resourceId":"dsddf",
            "User_Id":"dsjdkj"
       })
        .expect(400,done);
    });
    
    
    // it("invalid  resource Id",  (done) => {
    //     request(app)
    //      .post('/api/Resources/unlike')
    //      .send({
    //         "resourceId":"5c9243a5311a20ca",
    //         "Type":"Review",
    //         "User_Id":"5cb6067bd42e9b00173fa1fc"
    //        })
    //     .expect(404,done);
    // });
    it(" invalid user",  (done) => {
        request(app)
         .post('/api/Resources/unlike')
         .send({
            "resourceId":"5cc70e3fa5733545701e3167",
            "Type":"Review",
            "User_Id":"5cb6067bd42e9"
       })
        .expect(404,done);
    });
        
    it("valid Review unLike ",  (done) => {
        request(app)
         .post('/api/Resources/unlike')
         .send({
            "resourceId":"5cc70e3fa5733545701e3167",
            "Type":"Review",
            "User_Id":"5cb60a0ad42e9b00173fa1fd"
       })
        .expect(200,done);
    });
        it("invalid Review unLike twice",  (done) => {
            request(app)
             .post('/api/Resources/unlike')
             .send({
                "resourceId":"5cc70e3fa5733545701e3167",
                "Type":"Review",
                "User_Id":"5cb60a0ad42e9b00173fa1fd"
           })
            .expect(401,done);
            
    });
})
    })