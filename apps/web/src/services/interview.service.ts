import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";
import type {
  CreateInterviewInput,
  CreateInterviewResponse,
} from "@/types/interview";

export async function createInterview(
  data: CreateInterviewInput
): Promise<CreateInterviewResponse> {
  const response = await api.post(
    "/interviews",
    data,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}