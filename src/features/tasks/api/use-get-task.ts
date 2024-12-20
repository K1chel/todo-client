import { useQuery } from "@tanstack/react-query";

import { tasksService } from "../services/tasks-services";

export const useGetTask = (id: string) => {
  const query = useQuery({
    queryKey: ["task", { id }],
    queryFn: () => tasksService.getTask(id),
  });

  return query;
};
