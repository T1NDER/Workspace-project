import "@components/AppHeader/AppHeader.css";
import dmiriyAvatar from "@assets/images/team/Dmitriy.jpg";

export function AppHeader() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__brand">
            <div className="header__logo">W</div>
            <strong className="header__brand-name">Workspace</strong>
          </div>
          <nav className="header__nav">
            <a className="header__nav-link">Обзор</a>
            <a className="header__nav-link">Проекты</a>
            <a className="header__nav-link">Задачи</a>
            <a className="header__nav-link">Команда</a>
            <a className="header__nav-link">Отчёты</a>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__search">
            <input className="header__search-input" placeholder="Поиск..." />
            <span className="header__search-hint">⌘K</span>
          </div>
          <button className="header__icon-btn">
            <span className="header__bell-dot"></span>
            Уведомления
          </button>
          <div className="header__user">
            <img
              src={dmiriyAvatar}
              className="header__avatar"
              alt="Аватар пользователя"
            />
            <div className="header__user-info">
              <div className="header__user-name">Дмитрий С.</div>
              <div className="header__user-role">Frontend Lead</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}