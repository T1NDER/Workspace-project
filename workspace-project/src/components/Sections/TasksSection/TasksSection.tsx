import { tasks } from "@data/tasks";
import type { Task } from "@/types";
import "@componentsSection/TasksSection/TasksSection.css";


const priorityLabels = {
  high: "Высокий",
  medium: "Средний",
  low: "Низкий",
};

const statusLabels = {
  "todo": "К выполнению",
  "in-progress": "В работе",
  "done": "Готово",
};

interface TaskItemProps {
  task: Task;
}


export function TasksSection() {
  return (
    <section className="tasks-section">
      <div className="tasks-section__header">
        <h2 className="tasks-section__title">Задачи команды</h2>
        <button className="tasks-section__btn">+ Новая задача</button>
      </div>
      <div className="tasks-section__list">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>
    </section>
  );
}


function TaskItem({ task }: TaskItemProps) {
  return (
    <div className={`task-item task-item--${task.priority}`}>
      <div className={`task-item__dot task-item__dot--${task.priority}`}></div>
      <div className="task-item__info">
        <div className="task-item__title">{task.title}</div>
        <div className="task-item__assignee">{task.assignee}</div>
      </div>
      <div className="task-item__badges">
        <span className={`task-item__badge task-item__badge--status-${task.status}`}>
          {statusLabels[task.status]}
        </span>
        <span className={`task-item__badge task-item__badge--priority-${task.priority}`}>
          {priorityLabels[task.priority]}
        </span>
        <span className="task-item__due">{task.dueDate}</span>
      </div>
    </div>
  );
}