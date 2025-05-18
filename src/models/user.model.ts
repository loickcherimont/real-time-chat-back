import { Schema } from 'mongoose';

//  Define a schema for chat
export const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});