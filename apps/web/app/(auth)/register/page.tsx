"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

import { useRegister } from "@/hooks/use-register";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const registerMutation = useRegister();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const password = watch("password");

  const onSubmit = async (
    data: RegisterForm
  ) => {
    try {
      await registerMutation.mutateAsync({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      toast.success(
        "Account created successfully!"
      );

      router.push("/login");
    } catch (error) {
      console.error(error);

      toast.error("Registration failed.");
    }
  };

  return (
    <main className="flex min-h-screen">

      {/* Left */}

      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-16 text-white lg:flex">

        <div className="max-w-md">

          <h1 className="text-5xl font-extrabold">
            Start Your Journey !
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Create your account and begin
            practicing AI-powered mock interviews.
          </p>

          <div className="mt-12 space-y-5">

            <div>🎯 Personalized Questions</div>

            <div>📄 Resume Analysis</div>

            <div>📊 Performance Tracking</div>

            <div>🤖 AI Feedback</div>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-1 items-center justify-center bg-slate-50 p-8">

        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500">
              Join AI Mock Interview
            </p>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* Name */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border px-4">

                <User className="h-5 w-5 text-gray-400" />

                <input
                  {...register("fullName", {
                    required:
                      "Full name is required",
                  })}
                  className="w-full bg-transparent p-3 outline-none"
                  placeholder="John Doe"
                />

              </div>

              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <div className="flex items-center rounded-xl border px-4">

                <Mail className="h-5 w-5 text-gray-400" />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  className="w-full bg-transparent p-3 outline-none"
                  placeholder="you@example.com"
                />

              </div>

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="flex items-center rounded-xl border px-4">

                <Lock className="h-5 w-5 text-gray-400" />

                <input
                  {...register("password", {
                    required:
                      "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Minimum 8 characters",
                    },
                  })}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className="w-full bg-transparent p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Confirm Password */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>

              <div className="flex items-center rounded-xl border px-4">

                <Lock className="h-5 w-5 text-gray-400" />

                <input
                  {...register(
                    "confirmPassword",
                    {
                      validate: (value) =>
                        value === password ||
                        "Passwords do not match",
                    }
                  )}
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  className="w-full bg-transparent p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>

              </div>

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={
                registerMutation.isPending
              }
              className="w-full rounded-xl bg-blue-900 p-4 font-semibold text-white hover:bg-blue-850 disabled:opacity-50"
            >
              {registerMutation.isPending
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-900"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}