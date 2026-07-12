"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getResumes,
  uploadResume,
  deleteResume,
} from "@/services/resume.service";

export function useResumes() {
  return useQuery({
    queryKey: ["resumes"],
    queryFn: getResumes,
  });
}

export function useUploadResume() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadResume,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });
    },
  });
}

export function useDeleteResume() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });
    },
  });
}