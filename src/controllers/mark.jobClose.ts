import { Request, Response } from "express";
import { jobCommandService } from "../services/job.command";

//# logic to change status open to close || close to open

export const markJobClose = async (req: Request, res: Response) => {
  const { id, status } = req.params;

  const job = await jobCommandService.updateJobStatus(id, status);

  return res.status(200).json({
    message: `Job status updated successfully to '${status}'`,
    job,
  });
};
