"use client";

import Image from "next/image";

import { Badge } from "@/components/badge";
import { Skeleton } from "@/components/skeleton";

import { useGetTasks } from "../api/use-get-tasks";
import { TaskCard, TaskCardLoader } from "./task-card";

export const TasksList = () => {
  const { data: tasks, isLoading } = useGetTasks();

  if (isLoading) return <TasksListLoader />;

  const totalTasks = tasks?.length;
  const completedTasks = tasks?.filter((task) => task.completed).length;
  const completedTaskText =
    totalTasks === 0 ? "0" : `${completedTasks} of ${totalTasks}`;

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="text-primary">Tasks</h3>
          <Badge>{totalTasks}</Badge>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="text-purple">Completed</h3>
          <Badge>{completedTaskText}</Badge>
        </div>
      </div>
      <div className="space-y-5">
        {!tasks?.length ? (
          <div className="h-[266px] flex items-center justify-center gap-y-4 flex-col">
            <Image src="/notepad.png" alt="Notepad" width={56} height={56} />
            <h4 className="text-muted font-semibold text-lg">
              You don&apos;t have any tasks registered yet.
            </h4>
            <p className="text-muted">
              Create tasks and organize your to-do items.
            </p>
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

function TasksListLoader() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="space-y-5">
        {[...Array(5)].map((_, idx) => (
          <TaskCardLoader key={idx} />
        ))}
      </div>
    </div>
  );
}
