import { useMutation, useQueryClient } from "@tanstack/react-query";

import { tasksService } from "../services/tasks-services";
import { IUpdateTaskValues } from "../types";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IUpdateTaskValues) => tasksService.updateTask(data),
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", { id }] });
    },
  });

  return mutation;
};
