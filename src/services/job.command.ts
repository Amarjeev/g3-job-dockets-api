import JobModel from "../models/job.schema";

export const jobCommandService = {
  updateJobStatus: async (id: string, status: string) => {
    if (!id?.trim()) {
      throw {
        message: "Job ID is required",
        statusCode: 400,
      };
    }

    // Validate status
    if (!["open", "closed"].includes(status)) {
      throw {
        message: "Status must be either 'open' or 'closed'",
        statusCode: 400,
      };
    }

    // Find job by jobNumber
    const job = await JobModel.findOne({ jobNumber: id });

    if (!job) {
      throw {
        message: "Job not found",
        statusCode: 400,
      };
    }

    // Update status
    job.status = status as "open" | "closed";
    await job.save();

    return job;
  },
};
