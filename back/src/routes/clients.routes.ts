import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  readClientController,
  updateClientController,
} from "../controllers";
import { clientSchemaReq, updateClientSchema } from "../schemas";
import {
  ensureDataIsValidMiddleware,
  ensureClientExistMiddleware,
  ensureClientEmailExistMiddleware,
  ensureClientPhoneNumberExistMiddleware,
  ensureTokenIsValidMiddleware,
} from "../middlewares";

const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  ensureClientEmailExistMiddleware,
  ensureClientPhoneNumberExistMiddleware,
  ensureDataIsValidMiddleware(clientSchemaReq),
  createClientController
);
clientsRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureClientExistMiddleware,
  readClientController
);
clientsRoutes.patch(
  "",
  ensureTokenIsValidMiddleware,
  ensureClientExistMiddleware,
  ensureDataIsValidMiddleware(updateClientSchema),
  updateClientController
);
clientsRoutes.delete(
  "",
  ensureTokenIsValidMiddleware,
  ensureClientExistMiddleware,
  deleteClientController
);

export { clientsRoutes };
