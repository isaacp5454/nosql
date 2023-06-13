const { Schema, model } = require('mongoose');


//Use Mongoose's ObjectId data type
//Default value is set to a new ObjectId    we will come back to this one.
// we are giving the reactionId a type object.

const reactionSchema = new Schema ({
    reactionId: {
        type:Schema.Types.ObjectId,
       
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280

    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
})


createdAtSchema.virtual('formattedCreatedAt').get(function () {
    const dateOptions= { year:'numeric',month:'long',day:'numeric'};
    return this.createdAt.toLocaleDateString(undefined, dateOptions);                           ////debug maybe Use a getter method to format the timestamp on query
});                                         

module.exports = mongoose.model('Reaction',reactionSchema)