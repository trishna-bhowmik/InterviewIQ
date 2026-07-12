"use client";

import { useMutation } from "@tanstack/react-query";
import { login, type LoginInput } from "@/services/auth.service";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginInput) => login(data),
  });
}