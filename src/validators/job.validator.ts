import { Request, Response, NextFunction } from "express";

export const validateJob = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { clientName, siteLocation, status } = req.body;

  if (!clientName?.trim() || !siteLocation?.trim() || !status?.trim()) {
    throw {
      message: "All fields are required",
      statusCode: 400,
    };
  }

  if (!["open", "closed"].includes(status)) {
    throw {
      message: "Status must be either 'open' or 'closed'",
      statusCode: 400,
    };
  }

  if (clientName.length > 60) {
    throw {
      message: "Client Name exceeds character limit. Max: 60",
      statusCode: 400,
    };
  }

  if (siteLocation.length > 150) {
    throw {
      message: "Site Location exceeds character limit. Max: 150",
      statusCode: 400,
    };
  }

  next();
};
