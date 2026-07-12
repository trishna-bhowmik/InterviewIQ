import { api } from "@/lib/axios";
import { getAuthHeader } from "@/lib/auth";

export async function getProfile() {
  const response = await api.get(
    "/profile",
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}