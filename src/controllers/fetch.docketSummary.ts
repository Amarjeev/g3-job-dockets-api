import { Request, Response } from "express";
import { docketSummaryService } from "../services/docket.summary";

//# logic to create summary for all docket

export const fetchDocketSummary = async (req: Request, res: Response) => {
  const { totalDockets, totalHoursByRole } = await docketSummaryService.getSummary();

  return res.status(200).json({
    message: "Docket summary fetched successfully",
    totalDockets,
    totalHoursByRole,
  });
};
