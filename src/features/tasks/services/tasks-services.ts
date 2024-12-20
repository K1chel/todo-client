import { axiosClassic } from "@/lib/interceptors";
import { ITask, ITaskFormValues, IUpdateTaskValues } from "../types";

class TasksService {
  async createTask(data: ITaskFormValues) {
    const response = await axiosClassic.post<ITask>("/tasks", data);

    return response.data;
  }

  async getTasks() {
    const response = await axiosClassic.get<ITask[]>("/tasks");

    return response.data;
  }

  async getTask(id: string) {
    const response = await axiosClassic.get<ITask>(`/tasks/${id}`);

    return response.data;
  }

  async updateTask(values: IUpdateTaskValues) {
    const response = await axiosClassic.put<ITask>(
      `/tasks/${values.id}`,
      values
    );

    return response.data;
  }

  async deleteTask(id: string) {
    const response = await axiosClassic.delete(`/tasks/${id}`);

    return response.data;
  }
}

export const tasksService = new TasksService();
