import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  readContactController,
  readContactsController,
  updateContactController,
} from "../controllers";
import {
  ensureClientExistMiddleware,
  ensureContactEmailExistMiddleware,
  ensureContactPhoneNumberExistMiddleware,
  ensureDataIsValidMiddleware,
  ensureTokenIsValidMiddleware,
} from "../middlewares";
import { contactSchemaReq, updateContactSchema } from "../schemas";

const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(contactSchemaReq),
  ensureClientExistMiddleware,
  ensureContactEmailExistMiddleware,
  ensureContactPhoneNumberExistMiddleware,
  createContactController
);
contactRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureClientExistMiddleware,
  readContactsController
);
contactRoutes.get("/:id", ensureTokenIsValidMiddleware, readContactController);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  deleteContactController
);

export { contactRoutes };
