import { Request, Response } from "express";
import { jobService } from "../services/job.service";

//# logic to create new Jobs
export const createjob = async (req: Request, res: Response) => {
  const job = await jobService.createJob(req.body);

  return res.status(201).json({
    message: "Job created successfully",
    data: job,
  });
};
