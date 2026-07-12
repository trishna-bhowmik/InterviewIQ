"use client";

import { useMutation } from "@tanstack/react-query";
import { createInterview } from "@/services/interview.service";

export function useCreateInterview() {
  return useMutation({
    mutationFn: createInterview,
  });
}