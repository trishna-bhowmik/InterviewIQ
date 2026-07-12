"use client";

import { useMutation } from "@tanstack/react-query";
import {
  register,
  type RegisterInput,
} from "@/services/auth.service";

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterInput) =>
      register(data),
  });
}