import { Request, Response } from "express";
import { jobQueryService } from "../services/job.query";

//# logic to fetch existe jobs in db

export const fetchJob = async (req: Request, res: Response) => {
  const status = req.query.status as string;

  const jobs = await jobQueryService.fetchJobs(status);

  return res.status(200).json({
    message: "Jobs fetched successfully",
    jobs,
  });
};
