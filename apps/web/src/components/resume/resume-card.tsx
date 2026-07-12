"use client";

import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  FileText,
  Mic,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";
import { useState } from "react";

import { useDeleteResume } from "@/hooks/use-resume";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  resume: any;
}

export function ResumeCard({ resume }: Props) {
  const deleteResume = useDeleteResume();

  const [open, setOpen] = useState(false);

  async function handleDelete() {
    try {
      await deleteResume.mutateAsync(resume.id);

      toast.success("Resume deleted successfully.");

      setOpen(false);
    } catch {
      toast.error("Failed to delete resume.");
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="rounded-xl bg-blue-100 p-4">
            <FileText
              className="text-blue-900"
              size={28}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {resume.originalName}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(
                  resume.createdAt
                ).toLocaleDateString()}
              </span>

              <span className="flex items-center gap-2 text-green-600">
                <CheckCircle size={16} />
                AI Ready
              </span>

              <span>
                {(resume.size / 1024).toFixed(1)} KB
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/interview/create"
          className="flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-2 text-white transition hover:bg-slate-900"
        >
          <Mic size={18} />
          Create Interview
        </Link>

        <AlertDialog
          open={open}
          onOpenChange={setOpen}
        >
          <AlertDialogTrigger
  className="flex items-center gap-2 rounded-lg bg-blue-100 px-5 py-2 text-blue-900 transition hover:bg-blue-200"
>
  <Trash2 size={18} />
  Delete
</AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Delete Resume?
              </AlertDialogTitle>

              <AlertDialogDescription>
                This action cannot be undone.
                The resume will be permanently
                removed.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>
                Cancel
              </AlertDialogCancel>

              <AlertDialogAction
                onClick={handleDelete}
                disabled={deleteResume.isPending}
                className="bg-red-600 hover:bg-red-700"
              >
                {deleteResume.isPending
                  ? "Deleting..."
                  : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}