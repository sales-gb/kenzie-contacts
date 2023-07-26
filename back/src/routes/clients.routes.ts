import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  readClientController,
  readClientsController,
  updateClientController,
} from "../controllers";
import { clientSchemaReq, updateClientSchema } from "../schemas";
import {
  ensureDataIsValidMiddleware,
  ensureClientExistMiddleware,
  ensureClientEmailExistMiddleware,
  ensureClientPhoneNumberExistMiddleware,
} from "../middlewares";

const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  ensureClientEmailExistMiddleware,
  ensureClientPhoneNumberExistMiddleware,
  ensureDataIsValidMiddleware(clientSchemaReq),
  createClientController
);
clientsRoutes.get("", readClientsController);
clientsRoutes.get("/:id", ensureClientExistMiddleware, readClientController);
clientsRoutes.patch(
  "/:id",
  ensureClientExistMiddleware,
  ensureDataIsValidMiddleware(updateClientSchema),
  updateClientController
);
clientsRoutes.delete(
  "/:id",
  ensureClientExistMiddleware,
  deleteClientController
);

export default clientsRoutes;
