import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./common/logger/logger.js";

const PORT = env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`${env.APP_NAME} running on port ${PORT}`);
});