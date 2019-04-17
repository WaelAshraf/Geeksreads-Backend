/**
 * 
 * @api {GET} /book/getreviews.json Get the reviews for a book given a Geeksreads book id
 * @apiName GetReviewsbyBookId
 * @apiGroup Books
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {string} id Book ID.
 * @apiParam {number} [rating=0] Limit reviews to a particular rating or above,(default is 0).
 * 
 * @apiSuccess {string} UserId User-ID.
 * @apiSuccess {string} BookId Book-ID.
 * @apiSuccess {string} ReviewId Review-ID.
 * @apiSuccess {string} ReviewBody The text for the review entered by user.
 * @apiSuccess {DatePicker} ReviewDate Date where review was entered by user.
 * @apiSuccess {Number}   ReviewRating       Rating for the review.
 * 
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *          "ReviewId":"5c9243a5beb4101160e23fdd",
 *          "BookId":"5c9114a012d11bb226399497",
 *          "UserId":"5c9132dd47cb909f7fbbe875",
 *          "ReviewRating":5.0,
 *          "ReviewBody":"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\r\n",
 *          "ReviewDate":" 2015-12-03T02:44:27 -02:00"
 *          
 *     }
 * 
 * @apiError Book-Not-Found The <code>Book</code> was not found
 */

