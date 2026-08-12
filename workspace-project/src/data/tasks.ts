import type { Task } from "@/types";

export const tasks: Task[] = [
  { id: 1, title: "Верстка карточки продукта", status: "in-progress", assignee: "Анна С.", priority: "high", dueDate: "14 авг" },
  { id: 2, title: "Настроить CI/CD", status: "todo", assignee: "Дмитрий П.", priority: "medium", dueDate: "16 авг" },
  { id: 3, title: "Провести UX-исследование", status: "in-progress", assignee: "Елена И.", priority: "high", dueDate: "18 авг" },
  { id: 4, title: "Написать тесты API", status: "todo", assignee: "Михаил О.", priority: "low", dueDate: "20 авг" },
  { id: 5, title: "Оптимизировать изображения", status: "done", assignee: "Анна С.", priority: "medium", dueDate: "12 авг" },
];