import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export interface SubmitAnswerInput {
  interviewId: string;
  question: string;
  answer: string;
}

export async function submitAnswer(
  data: SubmitAnswerInput
) {
  const response = await api.post(
    "/answers",
    data,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}