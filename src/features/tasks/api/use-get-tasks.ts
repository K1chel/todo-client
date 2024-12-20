import { useQuery } from "@tanstack/react-query";

import { tasksService } from "../services/tasks-services";

export const useGetTasks = () => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: () => tasksService.getTasks(),
  });

  return query;
};
