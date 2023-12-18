import { StateCreator, create } from "zustand";
import type { Task, TaskStatus } from "../../interface";

interface TaskState {
  tasks: Record<string, Task>;
  getTaskStatus: (status: TaskStatus) => Task[];
}

const storeApi: StateCreator<TaskState> = (set, get) => ({
  tasks: {
    "ABC-1": { id: "ABC-1", title: "Task 1", status: "OPEN" },
    "ABC-2": { id: "ABC-2", title: "Task 2", status: "IN_PROGRESS" },
    "ABC-3": { id: "ABC-3", title: "Task 3", status: "OPEN" },
    "ABC-4": { id: "ABC-4", title: "Task 4", status: "OPEN" },
  },
  getTaskStatus: (status: TaskStatus) => {
    return Object.values(get().tasks).filter((task) => task.status === status);
  },
});

export const useTaskStore = create<TaskState>()(storeApi);
