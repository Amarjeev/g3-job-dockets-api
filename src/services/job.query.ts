import JobModel from "../models/job.schema";

export const jobQueryService = {
  fetchJobs: async (status: string) => {

    // Validate status value
    if (status.trim()&&!["open", "closed"].includes(status)) {
      throw {
        message: "Status must be either 'open' or 'closed'",
        statusCode: 400,
      };
    }

    // Filtering object
    const filter: any = { status };

    // Fetch jobs from DB
    return JobModel.find(filter).lean().select("-_id -__v -updatedAt");
  },
};
