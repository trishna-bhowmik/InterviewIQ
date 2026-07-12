import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export async function getInterviewHistory() {
  const response = await api.get(
    "/interviews",
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}