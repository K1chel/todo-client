export type ITask = {
  id: string;
  title: string;
  color?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IUpdateTaskValues = {
  id: string;
  title?: string;
  color?: string | null;
  completed?: boolean;
};

export type ITaskFormValues = {
  title: string;
  color: string | null;
  completed: boolean;
};
