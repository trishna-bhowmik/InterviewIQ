"use client";

import { useMutation } from "@tanstack/react-query";

import {
  createInterview,
  CreateInterviewRequest,
} from "@/services/create-interview.service";

export function useCreateInterview() {
  return useMutation({
    mutationFn: (
      data: CreateInterviewRequest
    ) => createInterview(data),
  });
}