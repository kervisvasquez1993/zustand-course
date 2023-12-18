import { JiraTasks } from "../../components";
import { useTaskStore } from "../../stores";

export const JiraPage = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filterStatusTask = useTaskStore((state) => state.getTaskStatus);
  const open = filterStatusTask("OPEN");
  const inProgress = filterStatusTask("IN_PROGRESS");
  const done = filterStatusTask("DONE");
  console.log({ tasks, open, inProgress, done });
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" value="OPEN" />

        <JiraTasks title="Avanzando" value="IN_PROGRESS" />

        <JiraTasks title="Terminadas" value="DONE" />
      </div>
    </>
  );
};
