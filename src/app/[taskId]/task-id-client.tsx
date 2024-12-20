"use client";

import { Loader2Icon } from "lucide-react";
import { redirect } from "next/navigation";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskForm } from "@/features/tasks/components/task-form";

interface TaskIdClientProps {
  taskId: string;
}

const TaskIdClient = ({ taskId }: TaskIdClientProps) => {
  const { data, isLoading } = useGetTask(taskId);

  if (isLoading) return <Loader2Icon className="size-5 animate-spin" />;

  if (!data) redirect("/");

  return (
    <TaskForm
      id={taskId}
      defaultValues={{
        color: data.color ?? null,
        title: data.title,
        completed: data.completed,
      }}
    />
  );
};

export default TaskIdClient;
