import { DashboardRepository } from "./dashboard.repository.js";

export class DashboardService {
  private repository = new DashboardRepository();

  async getDashboard(userId: string) {
    const interviews =
      await this.repository.getUserStats(userId);

    const totalInterviews = interviews.length;

    const completedInterviews =
      interviews.filter(
        (i) => i.status === "COMPLETED"
      ).length;

    const scheduledInterviews =
      interviews.filter(
        (i) => i.status === "SCHEDULED"
      ).length;

    const averageScore =
      completedInterviews === 0
        ? 0
        : interviews
            .filter((i) => i.score !== null)
            .reduce(
              (sum, i) => sum + (i.score ?? 0),
              0
            ) / completedInterviews;

    return {
      totalInterviews,
      completedInterviews,
      scheduledInterviews,
      averageScore,
      recentInterviews: interviews.slice(0, 5),
    };
  }
}