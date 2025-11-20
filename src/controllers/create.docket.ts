import { Request, Response } from "express";
import { docketService } from "../services/docket.service";

//# logic to create new docket

export const createdocket = async (req: Request, res: Response) => {
  const { jobId } = req.params;

  const docket = await docketService.createOrUpdateDocket({
    ...req.body,
    jobId,
  });

  return res.status(201).json({
    message: "Docket created successfully",
    docket,
  });
};
