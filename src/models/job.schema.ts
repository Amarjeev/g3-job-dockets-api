import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  jobNumber: string;
  clientName: string;
  siteLocation: string;
  status: "open" | "closed";
  createdAt: Date;
}

const jobSchema: Schema = new Schema<IJob>(
  {
    jobNumber: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    siteLocation: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

const JobModel = mongoose.model<IJob>("Job", jobSchema);

export default JobModel;
