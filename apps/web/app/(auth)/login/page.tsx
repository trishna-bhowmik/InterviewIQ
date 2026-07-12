"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

import { useLogin } from "@/hooks/use-login";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response =
        await loginMutation.mutateAsync(data);

      localStorage.setItem(
        "accessToken",
        response.data.accessToken
      );

      toast.success("Welcome back!");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error("Invalid email or password.");
    }
  };

  return (
    <main className="flex min-h-screen">

      {/* Left Side */}

      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-16 text-white lg:flex">

        <div className="max-w-md">

          <h1 className="text-5xl font-extrabold leading-tight">
            Glad to have u !
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Continue practicing AI-powered mock
            interviews and improve your interview
            performance.
          </p>

          <div className="mt-12 space-y-5">

            <div> AI Resume Analysis</div>

            <div> Personalized Interview Questions</div>

            <div> Instant AI Feedback</div>

            <div> Performance Dashboard</div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex flex-1 items-center justify-center bg-slate-50 p-8">

        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold">
              Login
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to your account
            </p>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

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
                  placeholder="you@example.com"
                  className="w-full bg-transparent p-3 outline-none"
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
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters",
                    },
                  })}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
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
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full rounded-xl bg-blue-900 p-4 font-semibold text-white transition hover:bg-blue-850 disabled:opacity-50"
            >
              {loginMutation.isPending
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          <p className="mt-8 text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-blue-900"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}