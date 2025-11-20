import { Router } from "express";

import { createjob } from "../controllers/create.job";
import {fetchJob} from "../controllers/fetch.JobDetails";
import { createdocket } from "../controllers/create.docket";
import {fetchJobDocket} from "../controllers/fetch.jobDocket";
import {markJobClose} from "../controllers/mark.jobClose";
import {fetchDocket} from "../controllers/fetch.docket";
import { fetchDocketSummary } from "../controllers/fetch.docketSummary";

import { validateDocket } from "../validators/docket.validator";
import { validateJob } from "../validators/job.validator";

const mainRouter = Router();

mainRouter.post("/create-job", validateJob, createjob);
mainRouter.use("/fetch-jobs",fetchJob);
mainRouter.post("/create-docket", validateDocket, createdocket);
mainRouter.get("/jobs/:id",fetchJobDocket);
mainRouter.patch("/jobs/:id/:status",markJobClose);
mainRouter.get("/jobs/:jobId/dockets",fetchDocket);
mainRouter.get("/dockets/summary",fetchDocketSummary);

export default mainRouter;
