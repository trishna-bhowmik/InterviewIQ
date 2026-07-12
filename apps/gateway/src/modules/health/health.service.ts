import { env } from "../../config/env.js";

export class HealthService {
  getHealth() {
    return {
      status: "ok",
      service: env.APP_NAME,
      version: env.APP_VERSION,
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString(),
    };
  }
}

export const healthService = new HealthService();