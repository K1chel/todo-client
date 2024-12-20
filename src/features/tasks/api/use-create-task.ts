import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ITaskFormValues } from "../types";
import { tasksService } from "../services/tasks-services";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ITaskFormValues) =>
      await tasksService.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return mutation;
};
