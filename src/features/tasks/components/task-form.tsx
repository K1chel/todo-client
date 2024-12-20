"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon, PlusCircleIcon } from "lucide-react";

import { TASK_COLORS } from "@/constants/colors";
import { ErrorMessage } from "@/components/error-message";

import { ITaskFormValues } from "../types";
import { useCreateTask } from "../api/use-create-task";
import { useUpdateTask } from "../api/use-update-task";
import { TaskColorCircle } from "./task-color-circle";

interface TaskFormProps {
  id?: string;
  defaultValues?: ITaskFormValues;
}

export const TaskForm = ({ defaultValues, id }: TaskFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    defaultValues?.color || ""
  );

  const router = useRouter();

  const handleSelectColor = (color: string) => setSelectedColor(color);

  const { mutate: createTask, isPending: isCreatingTask } = useCreateTask();
  const { mutate: updateTask, isPending: isUpdatingTask } = useUpdateTask();

  const disabled = isCreatingTask || isUpdatingTask;

  const { register, handleSubmit } = useForm<ITaskFormValues>({
    defaultValues: defaultValues || {
      color: null,
      completed: false,
      title: "",
    },
  });

  const onSubmit = handleSubmit((data: ITaskFormValues) => {
    setErrorMessage("");

    if (id && defaultValues) {
      updateTask(
        {
          id,
          color: selectedColor ?? defaultValues.color,
          completed: defaultValues.completed,
          title: data.title ?? defaultValues.title,
        },
        {
          onSuccess: () => router.push("/"),
          onError: (err) => setErrorMessage(err.message),
        }
      );
    } else {
      createTask(
        { ...data, color: selectedColor },
        {
          onSuccess: () => router.push("/"),
          onError: (err) => setErrorMessage(err.message),
        }
      );
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="flex flex-col space-y-3">
          <label htmlFor="title" className="text-primary font-semibold text-sm">
            Title
          </label>
          <input
            disabled={disabled}
            id="title"
            {...register("title")}
            placeholder="Ex. Brush you teeth"
            className="bg-muted-foreground border border-border px-3 py-3 rounded-md placeholder:text-muted focus:ring-2 focus:ring-primary/75 outline-none transition"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="title" className="text-primary font-semibold text-sm">
            Color
          </label>
          <div className="flex items-center gap-x-3">
            {TASK_COLORS.map((color) => (
              <TaskColorCircle
                key={color.name}
                handleColorSelect={() => {
                  handleSelectColor(color.value);
                }}
                selectedColor={selectedColor}
                value={color.value}
              />
            ))}
          </div>
        </div>
        <ErrorMessage message={errorMessage} />
        <button
          type="submit"
          disabled={disabled}
          className="w-full bg-primary-dark flex items-center justify-center gap-x-3 py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!!id ? (
            <>
              Save
              <CheckIcon />
            </>
          ) : (
            <>
              Add Task
              <PlusCircleIcon className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
