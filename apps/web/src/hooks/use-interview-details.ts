"use client";

import { useQuery } from "@tanstack/react-query";
import { getInterview } from "@/services/interview-details.service";

export function useInterview(id: string) {
  return useQuery({
    queryKey: ["interview", id],
    queryFn: () => getInterview(id),
    enabled: !!id,
  });
}