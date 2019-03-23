const mongoose = require('mongoose');
const Joi = require('Joi');
ObjectId = mongoose.Schema.Types.ObjectId;
var resourcesSchema = new mongoose.Schema({
    resourceId: {
        type: ObjectId//1
    },
    reviewId: {
        type: ObjectId//2
    },
    userId: {
        type: ObjectId//3
    },
    commentId: {
        type: ObjectId//4
    },
    likes: {
        type: Number//5
    },
    type: {
        type: String//6
    }
});
const Resource=mongoose.model('Resource',resourcesSchema);
function validateResource(resource)
{

    const Schema={
        ResourceID: Joi.string().required()
    };
    return Joi.validate(resource,Schema);
}
exports.Resource= Resource;
exports.validate=validateResource;