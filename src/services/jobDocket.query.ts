import JobModel from "../models/job.schema";
import DocketModel from "../models/docket.schema";

export const jobDocketQueryService = {
  fetchJobAndDockets: async (id: string) => {
    const jobIdRegex = /^JOB-\d{4}$/;

    if (!id?.trim()) {
      throw {
        message: "id required",
        statusCode: 400,
      };
    }

    if (!jobIdRegex.test(id)) {
      throw {
        message: "Invalid Job ID format",
        statusCode: 400,
      };
    }

    // Fetch job
    const job = await JobModel.findOne({ jobNumber: id })
      .lean()
      .select("-_id -__v -updatedAt");

    if (!job) {
      throw {
        message: "Job not found",
        statusCode: 400,
      };
    }

    // Fetch related dockets
    const dockets = await DocketModel.find({ jobId: id })
      .lean()
      .select("-_id -__v -updatedAt");

    return { job, dockets };
  },
};
