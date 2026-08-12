import { teamMembers } from "@data/teamMembers";
import "@componentsSection/WorkspaceSidebar/WorkspaceSidebar.css";

interface Props {
  activeSection: string;
  setActiveSection: (v: string) => void;
}

export function WorkspaceSidebar({ activeSection, setActiveSection }: Props) {
  const menuItems = [
    { id: "overview", label: "Обзор" },
    { id: "projects", label: "Проекты" },
    { id: "tasks", label: "Задачи" },
    { id: "team", label: "Команда" },
    { id: "activity", label: "Активности" },
    { id: "settings", label: "Настройки" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__team-card">
          <div className="sidebar__team-label">Команда</div>
          <div className="sidebar__team-name">Product Team</div>
          <div className="sidebar__team-meta">12 участников · 10 проектов</div>
          <div className="sidebar__team-avatars">
            {teamMembers.slice(0, 3).map((m) => (
              <img key={m.id} src={m.avatar} className="sidebar__team-avatar" alt="" />
            ))}
            <div className="sidebar__team-avatar sidebar__team-avatar--more">+9</div>
          </div>
        </div>

        <nav className="sidebar__menu">
          <div className="sidebar__menu-label">Меню</div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`sidebar__menu-item ${
                activeSection === item.id ? "sidebar__menu-item--active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar__help-card">
          <div className="sidebar__help-title">Нужна помощь?</div>
          <div className="sidebar__help-text">Свяжитесь с поддержкой команды</div>
          <button className="sidebar__help-btn">Открыть чат</button>
        </div>
      </div>
    </aside>
  );
}