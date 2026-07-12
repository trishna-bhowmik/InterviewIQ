"use client";

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

interface DeleteInterviewDialogProps {
  children: React.ReactNode;
  onConfirm: () => Promise<void>;
}

export function DeleteInterviewDialog({
  children,
  onConfirm,
}: DeleteInterviewDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
  render={children as React.ReactElement}
/>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Interview?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone.
            This will permanently delete the
            interview and all of its answers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700"
            onClick={async (e) => {
              e.preventDefault();
              await onConfirm();
            }}
          >
            Delete
          </AlertDialogAction>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}