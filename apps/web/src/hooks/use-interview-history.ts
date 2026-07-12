"use client";

import { useQuery } from "@tanstack/react-query";
import { getInterviewHistory } from "@/services/interview-history.service";

export function useInterviewHistory() {
  return useQuery({
    queryKey: ["interview-history"],
    queryFn: getInterviewHistory,
  });
}