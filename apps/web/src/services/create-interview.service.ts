import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export interface CreateInterviewRequest {
  resumeId: string;
  title: string;
  description: string;
  type:
    | "HR"
    | "TECHNICAL"
    | "DSA"
    | "SYSTEM_DESIGN"
    | "BEHAVIORAL";

  difficulty:
    | "EASY"
    | "MEDIUM"
    | "HARD";

  duration: number;
}

export async function createInterview(
  data: CreateInterviewRequest
) {
  const response = await api.post(
    "/interviews",
    data,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}