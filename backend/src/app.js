import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("parser"));
app.use(cookieParser());

import userRoutes from "./routes/User.route.js";
import taskRoutes from "./routes/Task.route.js";
import socialRoutes from "./routes/SocialMedia.route.js";

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/tasks", taskRoutes)
app.use("/api/v1/social", socialRoutes)

export { app };
