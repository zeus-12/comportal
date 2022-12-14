import { Schema, model, models } from "mongoose";

const complaintSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    // phoneNumber: {
    //   type: Number,
    //   required: true,
    // },
    // created_at: { type: Date, required: true, default: Date.now },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Complaint = models.Complaint || model("Complaint", complaintSchema);

export default Complaint;
