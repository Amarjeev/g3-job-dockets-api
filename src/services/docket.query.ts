import DocketModel from "../models/docket.schema";
import JobModel from "../models/job.schema";

export const docketQueryService = {
  fetchDockets: async ({ jobId, from, to, supervisorName }: any) => {
    if (!jobId?.trim()) {
      throw { message: "Job ID is required", statusCode: 400 };
    }

    // Check job exists
    const job = await JobModel.findOne({ jobNumber: jobId });
    if (!job) {
      throw { message: "Job not found", statusCode: 400 };
    }

    // Build query object
    const query: any = { jobId };

    // Optional filter: supervisor
    if (supervisorName) {
      query.supervisorName = supervisorName;
    }

    // Optional filter: date range
    if (from || to) {
      query.date = {};
      if (from) query.date.$gte = from;
      if (to) query.date.$lte = to;
    }

    return await DocketModel.find(query)
      .lean()
      .select("-_id -__v -updatedAt");
  },
};
