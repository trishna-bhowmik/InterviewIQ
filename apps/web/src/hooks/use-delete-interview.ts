"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInterview } from "@/services/delete-interview.service";

export function useDeleteInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteInterview(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}