import { Request, Response, NextFunction } from "express";

export const validateDocket = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jobId, supervisorName, date, workerName, hoursWorked, role } =
    req.body;

  //  Validate jobId format (e.g., JOB-0001)
  const jobIdRegex = /^JOB-\d{4}$/;
  if (!jobId || !jobIdRegex.test(jobId)) {
    throw {
      message: "Invalid jobId format. Expected 'JOB-0001'",
      statusCode: 400,
    };
  }

  //  Supervisor name length
  if (!supervisorName || supervisorName.length > 60) {
    throw {
      message: "supervisorName is required & max 60 chars",
      statusCode: 400,
    };
  }

  //  Validate date format DD-MM-YYYY
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (!date || !dateRegex.test(date)) {
    throw {
      message: "Date must be in format DD-MM-YYYY",
      statusCode: 400,
    };
  }

  // Validate worker name
  if (!workerName || workerName.length > 60) {
    throw {
      message: "workerName is required & max 60 chars",
      statusCode: 400,
    };
  }

  // Validate worker name
  if (!role || role.length > 25) {
    throw {
      message: "Role is required & max 25 chars",
      statusCode: 400,
    };
  }

  // Validate hoursWorked (must be number 1–24)
  if (typeof hoursWorked !== "number" || hoursWorked < 1 || hoursWorked > 24) {
    throw {
      message: "hoursWorked must be a number between 1 and 24",
      statusCode: 400,
    };
  }

  next();
};
