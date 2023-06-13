const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },

    //// there is a bracket because it references to the thought models.
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }],
});

thoughtSchema.virtual('formattedCreatedAt').get(function(){
    const dateOptions = { year:'numeric', month:'long', day:'numeric'};
    return this.createdAt.toLocaleDateString(undefined, dateOptions);
});



thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length();                           
});                                                           

module.exports = mongoose.model('Thought',thoughtSchema);





