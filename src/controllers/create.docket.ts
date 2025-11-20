import { Request, Response } from "express";
import { docketService } from "../services/docket.service";

//# logic to create new docket

export const createdocket = async (req: Request, res: Response) => {
  const docket = await docketService.createOrUpdateDocket(req.body);

  return res.status(201).json({
    message: "Docket created successfully",
    docket,
  });
};
