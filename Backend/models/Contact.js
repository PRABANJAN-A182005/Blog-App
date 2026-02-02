import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

console.log("Contact model loaded");
const contacts = mongoose.model("Contacts", contactSchema);

export default contacts;