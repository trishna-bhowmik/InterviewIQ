export interface DashboardInterview {
  id: string;
  title: string;
  status: string;
  score: number | null;
  createdAt: string;
}

export interface DashboardData {
  totalInterviews: number;
  completedInterviews: number;
  scheduledInterviews: number;
  averageScore: number;
  recentInterviews: DashboardInterview[];
}