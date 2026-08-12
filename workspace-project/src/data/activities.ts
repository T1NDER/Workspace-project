import type { Activity } from "@/types";

export const activities: Activity[] = [
  { id: 1, user: "Анна С.", action: "закрыла задачу", target: "Исправить баг в корзине", time: "5 мин назад", type: "task" },
  { id: 2, user: "Михаил О.", action: "создал проект", target: "Интеграция с AI", time: "1 час назад", type: "project" },
  { id: 3, user: "Елена И.", action: "загрузила макет", target: "Главная страница v3", time: "2 часа назад", type: "file" },
  { id: 4, user: "Дмитрий П.", action: "развернул билд", target: "staging-2026-08-12", time: "3 часа назад", type: "deploy" },
  { id: 5, user: "Анна С.", action: "оставила комментарий", target: "в задаче Редизайн", time: "5 часов назад", type: "comment" },
];