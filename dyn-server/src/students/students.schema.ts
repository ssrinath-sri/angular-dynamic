import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const StudentsSchema = new mongoose.Schema({
    firstname: {type: String, requried: true },
    lastname: {type: String, requried: true },
    mobilenumber: {type: Number, requried: true },
    dob: {type: Number, requried: true },
});

export interface StudentsInterface extends Document {
    firstname: string;
    lastname: string;
    mobilenumber: number;
    dob: number;
}