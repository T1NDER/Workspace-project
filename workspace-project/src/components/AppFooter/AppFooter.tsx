import "./AppFooter.css";

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <strong className="footer__title">Workspace</strong>

        <address className="footer__address">
          <p>ООО «Воркспейс Технолоджис»</p>
          <p>ул. Примерная, д. 12, офис 304</p>
          <p>Москва, Россия</p>
        </address>

        <p className="footer__copyright">
          Copyright {currentYear} Workspace. Все права защищены.
        </p>
      </div>
    </footer>
  );
}