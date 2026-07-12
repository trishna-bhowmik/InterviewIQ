import { ProfileRepository } from "./profile.repository.js";

export class ProfileService {
  private repository = new ProfileRepository();

  async getProfile(userId: string) {
    const user = await this.repository.getProfile(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const totalInterviews = user.interviews.length;

    const completedInterviews = user.interviews.filter(
      (i) => i.status === "COMPLETED"
    ).length;

    const averageScore =
      completedInterviews === 0
        ? 0
        : user.interviews
            .filter((i) => i.score !== null)
            .reduce(
              (sum, i) => sum + (i.score ?? 0),
              0
            ) / completedInterviews;

    return {
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },

      stats: {
        totalInterviews,
        completedInterviews,
        averageScore,
      },

      latestResume:
        user.resumes.length > 0
          ? user.resumes[0]
          : null,
    };
  }
}