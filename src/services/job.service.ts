import JobModel from "../models/job.schema";
import { generateJobId } from "../utils/generateJobId";

export interface CreateJobDTO {
  clientName: string;
  siteLocation: string;
}

export const jobService = {
  createJob: async ({ clientName, siteLocation}: CreateJobDTO) => {
    // Generate unique job ID
    const jobNumber = await generateJobId();

    if (!jobNumber) {
      throw { message: "Failed to generate Job ID", statusCode: 500 };
    }

    // Prevent duplicate job numbers
    const jobExist = await JobModel.findOne({ jobNumber });

    if (jobExist) {
      throw { message: "Job number already exists", statusCode: 400 };
    }

    // Save job to database
    return  JobModel.create({
      clientName,
      siteLocation,
      jobNumber,
    });
  },
};
