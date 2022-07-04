const { Schema, Types } = require('mongoose');
const dateFormatting = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: [true, 'An username is required!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormatting(createdAtVal)
        }

    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;

