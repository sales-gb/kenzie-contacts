import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { clientsRoutes, contactRoutes, loginRoutes } from "./routes";
import { handleErrors } from "./error";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use("/clients", clientsRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use(handleErrors);

export default app;
