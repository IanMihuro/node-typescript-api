import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema ({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },

    email : {
        type: String
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String
    },
    location:[
        {
            streetAddress: String,
            suiteNumber: String,
            city: String,
            state: String,
            zipCode: String,
        }
    ],
    roles: {
        admin: Boolean,
        nonAdmin: Boolean,
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});