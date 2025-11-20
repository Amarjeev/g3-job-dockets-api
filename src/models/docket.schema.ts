import mongoose, { Schema, Document } from "mongoose";

export interface ILabourItem {
  workerName: string;
  role: string;
  hoursWorked: number;
}

export interface IDocket extends Document {
  jobId: string;
  supervisorName: string;
  date: string;
  labourItems: ILabourItem[];
  notes?: string;
  createdAt: Date;
}

const labourItemSchema = new Schema<ILabourItem>(
  {
    workerName: { type: String, required: true },
    role: { type: String, required: true },
    hoursWorked: { type: Number, required: true },
  },
  { _id: false }
);

const docketSchema = new Schema<IDocket>(
  {
    jobId: { type: String, required: true },
    supervisorName: { type: String, required: true },
    date: { type: String, required: true },
    labourItems: { type: [labourItemSchema], default: [] },
    notes: { type: String },
  },
  { timestamps: true }
);

const DocketModel = mongoose.model<IDocket>("Docket", docketSchema);

export default DocketModel;
