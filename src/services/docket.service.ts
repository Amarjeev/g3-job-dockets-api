import DocketModel from "../models/docket.schema";
import JobModel from "../models/job.schema";

export interface CreateDocketDTO {
  jobId: string;
  supervisorName: string;
  date: string;
  workerName: string;
  hoursWorked: number;
  notes?: string;
}

export const docketService = {
  createOrUpdateDocket: async (data: CreateDocketDTO) => {
    const { jobId, supervisorName, date, workerName, hoursWorked, notes } =
      data;

    // Check if job exists
    const jobExist = await JobModel.findOne({
      jobNumber: jobId,
      status: "open",
    });

    if (!jobExist) {
      throw {
        message: "Job does not exist or this job is already closed/done",
        statusCode: 400,
      };
    }

    // Check if docket exists
    const existingDocket = await DocketModel.findOne({ jobId, date });

    if (existingDocket) {
      existingDocket.labourItems.push({
        workerName,
        role: "Worker",
        hoursWorked,
      });
      return await existingDocket.save();
    }

    return await DocketModel.create({
      jobId,
      supervisorName,
      date,
      labourItems: [
        {
          workerName,
          role: "Worker",
          hoursWorked,
        },
      ],
      notes: notes || "",
    });
  },
};
