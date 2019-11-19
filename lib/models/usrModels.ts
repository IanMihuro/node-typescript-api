import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name"
  },
  lastName: {
    type: String,
    required: "Enter a last name"
  },

  email: {
    type: String,
    required: "Enter a valid Email"
  },
  phoneNumber: {
    type: String
  },
  password: {
    type: String,
    required: "Enter a password"
  },
  location: [
    {
      streetAddress: String,
      suiteNumber: String,
      city: String,
      state: String,
      zipCode: String
    }
  ],
  role: Boolean,
  created_date: {
    type: Date,
    default: Date.now
  }
});
