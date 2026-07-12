import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export async function getDashboard() {
  const response = await api.get(
    "/dashboard",
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}