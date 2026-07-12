export type InterviewType =
  | "HR"
  | "TECHNICAL"
  | "DSA"
  | "SYSTEM_DESIGN"
  | "BEHAVIORAL";

export type Difficulty =
  | "EASY"
  | "MEDIUM"
  | "HARD";

export interface CreateInterviewInput {
  resumeId: string;
  title: string;
  description?: string;
  type: InterviewType;
  difficulty: Difficulty;
  duration: number;
}

export interface Interview {
  id: string;
  title: string;
  type: InterviewType;
  difficulty: Difficulty;
  duration: number;
  status: string;
  questions: Record<string, string[]>;
}

export interface CreateInterviewResponse {
  success: boolean;
  data: Interview;
}