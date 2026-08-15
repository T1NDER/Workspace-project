import type { Project } from "@/types";

import brushIcon from "@assets/icons/projects/Brush.png";
import phoneIcon from "@assets/icons/projects/Phone.png";
import databaseIcon from "@assets/icons/projects/Database.png";
import serverIcon from "@assets/icons/projects/Server.png";
import scheduleIcon from "@assets/icons/projects/Schedule.png";


export const projects: Project[] = [
  { 
    id: 1, 
    name: "Редизайн главной", 
    status: "active", 
    progress: 78, 
    team: 4, 
    deadline: "15 авг", 
    description: "Обновление UI и UX главной страницы сайта",
    image: brushIcon
  },
  { 
    id: 2, 
    name: "Мобильное приложение v2", 
    status: "active", 
    progress: 45, 
    team: 6, 
    deadline: "30 авг", 
    description: "Вторая версия мобильного приложения",
    image: phoneIcon
  },
  { 
    id: 3, 
    name: "CRM для B2B", 
    status: "active", 
    progress: 92, 
    team: 3, 
    deadline: "20 авг", 
    description: "Система управления клиентами",
    image: databaseIcon
  },
  { 
    id: 4, 
    name: "API шлюз", 
    status: "active", 
    progress: 34, 
    team: 5, 
    deadline: "10 сен", 
    description: "Единая точка входа для микросервисов",
    image: serverIcon
  },
  { 
    id: 5, 
    name: "Аналитика дашборд", 
    status: "active", 
    progress: 67, 
    team: 2, 
    deadline: "25 авг", 
    description: "Панель с ключевыми метриками продукта",
    image: scheduleIcon
  },
  { 
    id: 6, 
    name: "Платёжная система", 
    status: "active", 
    progress: 55, 
    team: 4, 
    deadline: "5 сен", 
    description: "Интеграция с несколькими провайдерами",
    image: serverIcon
  },
  { 
    id: 7, 
    name: "Лендинг партнёрам", 
    status: "active", 
    progress: 88, 
    team: 2, 
    deadline: "18 авг", 
    description: "Страница для привлечения партнёров",
    image: brushIcon
  },
  { 
    id: 8, 
    name: "Интеграция с AI", 
    status: "active", 
    progress: 23, 
    team: 3, 
    deadline: "1 окт", 
    description: "Внедрение AI-ассистента в продукт",
    image: serverIcon
  },
  { 
    id: 9, 
    name: "Рефакторинг авторизации", 
    status: "active", 
    progress: 71, 
    team: 2, 
    deadline: "22 авг", 
    description: "Переписывание модуля аутентификации",
    image: databaseIcon 
  },
  { 
    id: 10, 
    name: "Документация API", 
    status: "active", 
    progress: 49, 
    team: 1, 
    deadline: "28 авг", 
    description: "Публичная документация для разработчиков",
    image: serverIcon
  },
];