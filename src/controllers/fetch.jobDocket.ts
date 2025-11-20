import { Request, Response } from "express";
import { jobDocketQueryService } from "../services/jobDocket.query";

//# logic to fetch job and depende docket also

export const fetchJobDocket = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { job, dockets } = await jobDocketQueryService.fetchJobAndDockets(id);

  return res.status(200).json({
    message: "Job and related dockets fetched successfully",
    job,
    dockets,
  });
};
