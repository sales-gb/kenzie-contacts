import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { clientsRoutes, contactRoutes, loginRoutes } from "./routes";
import { handleErrors } from "./error";
import cors from "cors";

const app: Application = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3001",
  "https://kenzie-contacts-mu.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use("/clients", clientsRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use(handleErrors);

export default app;
