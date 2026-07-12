import { api } from "@/lib/axios";
import type { ResumeResponse } from "@/types/resume";

function getAuthHeader() {
  const token = localStorage.getItem("accessToken");

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getResumes(): Promise<ResumeResponse> {
  const response = await api.get("/resume/my", {
    headers: getAuthHeader(),
  });

  return response.data;
}

export async function uploadResume(file: File) {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        ...getAuthHeader(),
      },
    }
  );

  return response.data;
}

export async function deleteResume(id: string) {
  const response = await api.delete(
    `/resume/${id}`,
    {
      headers: getAuthHeader(),
    }
  );

  return response.data;
}