import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import { errorHandler } from "./middlewares/errorHandler";
import mainRouter from "./routes/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", mainRouter);


// Error Handler
app.use(errorHandler);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server", error);
    process.exit(1);
  }
}

startServer();
