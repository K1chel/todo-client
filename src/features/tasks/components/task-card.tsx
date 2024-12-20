"use client";

import { Trash2Icon } from "lucide-react";
import Link from "next/link";

import { Checkbox } from "@/components/checkbox";
import { useConfirm } from "@/hooks/use-confirm";
import { Skeleton } from "@/components/skeleton";

import { ITask } from "../types";
import { useUpdateTask } from "../api/use-update-task";
import { useDeleteTask } from "../api/use-delete-task";

interface TaskCardProps {
  task: ITask;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const [Dialog, confirm] = useConfirm(
    "Delete Task",
    "Are you sure you want to delete this task?"
  );
  const { mutate: updateMutation, isPending: isUpdatingTask } = useUpdateTask();
  const { mutate: deleteMutation, isPending: isDeletingTask } = useDeleteTask();

  const handleCompletedToggle = () => {
    updateMutation({
      id: task.id,
      completed: !task.completed,
    });
  };

  const handleDeleteTask = async () => {
    const ok = await confirm();

    if (!ok) return;

    deleteMutation(task.id);
  };

  const disabled = isUpdatingTask || isDeletingTask;

  return (
    <Link
      href={`/${task.id}`}
      className="bg-muted-foreground px-4 py-4 rounded-md border border-border flex items-center gap-x-4"
    >
      <Dialog />
      <div className="self-start">
        <Checkbox
          checked={task.completed}
          disabled={disabled}
          onChange={() => handleCompletedToggle()}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <p className="text-sm">{task.title}</p>
      <button
        className="ml-auto self-start p-1"
        onClick={(e) => {
          e.preventDefault();

          handleDeleteTask();
        }}
        disabled={disabled}
      >
        <Trash2Icon className="size-4 text-muted" />
      </button>
    </Link>
  );
};

export function TaskCardLoader() {
  return (
    <div className="bg-muted-foreground px-4 py-5 rounded-md border border-[#333333] flex items-center gap-x-4">
      <div className="self-start">
        <Skeleton className="size-5 rounded-full" />
      </div>
      <Skeleton className="w-full h-6" />
      <Skeleton className="size-4 rounded-full" />
    </div>
  );
}
