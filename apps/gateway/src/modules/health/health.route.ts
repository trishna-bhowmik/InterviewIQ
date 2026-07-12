import { Router } from "express";
import { healthController } from "./health.controller.js";
import { ApiError } from "../../common/errors/api-error.js";
import { validate } from "../../common/middleware/validate.middleware.js";
import { pingSchema } from "./health.schema.js";

const router = Router();

router.get("/", healthController.getHealth);

router.get("/error", () => {
  throw new ApiError(400, "This is a test error");
});

router.get(
  "/",
  validate(pingSchema),
  healthController.getHealth
);

export default router;