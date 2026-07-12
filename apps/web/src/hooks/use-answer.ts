"use client";

import { useMutation } from "@tanstack/react-query";
import { submitAnswer } from "@/services/answer.service";

export function useSubmitAnswer() {
  return useMutation({
    mutationFn: submitAnswer,
  });
}