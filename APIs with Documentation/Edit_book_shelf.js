/**
 * @api{Put} /user_shelves/User_Shelves_ID Edit book shelf
 * @apiVersion 0.0.0
 * @apiName UpdateShelf  
 * @apiGroup Shelves
 * 
 * @apiParam {Number} ID shelf id
 * @apiParam {String} ShelfName Shelf New Name
 *
 * @apiSuccess {boolen} UpdateShelfSuc  if the update happens successfully or not
 * @apiSuccessExample  Expected Data on Success
 * {
 * "UpdateShelfSuc": true
 * }
 * @apiError Shelf-Not-Found The <code>ShelfID</code> was not found
 */