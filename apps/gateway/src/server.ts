import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./common/logger/logger.js";

app.listen(env.PORT, () => {
  logger.info(`${env.APP_NAME} running on http://localhost:${env.PORT}`);
});