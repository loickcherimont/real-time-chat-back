import { Schema } from 'mongoose';

//  Define a schema for chat
export const ChatSchema = Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [
        {
            sender: { type: Schema.Types.ObjectId, ref: 'User'},
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
        },
    ],
});