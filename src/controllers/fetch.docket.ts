import { Request, Response } from "express";
import { docketQueryService } from "../services/docket.query";

//# fetch existe Docket in db

export const fetchDocket = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  const { from, to, supervisorName } = req.query;

  const dockets = await docketQueryService.fetchDockets({
    jobId,
    from,
    to,
    supervisorName,
  });

  return res.status(200).json({
    message: "Dockets fetched successfully",
    dockets,
  });
};
