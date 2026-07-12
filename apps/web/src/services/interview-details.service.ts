import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export async function getInterview(id: string) {
  const response = await api.get(
    `/interviews/${id}`,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}