import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export async function deleteInterview(id: string) {
  const response = await api.delete(
    `/interviews/${id}`,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}