import { teamMembers } from "@data/teamMembers";
import "@componentsSection/TeamMembersSection/TeamMembersSection.css";

const statusLabels = {
  online: "В сети",
  away: "Отошёл",
  offline: "Не в сети",
};

export function TeamMembersSection() {
  return (
    <section className="team-section">
      <div className="team-section__header">
        <h2 className="team-section__title">Участники команды</h2>
        <button className="team-section__link">Все участники</button>
      </div>

      <div className="team-section__grid">
        {teamMembers.map((m) => (
          <article key={m.id} className="team-card">
            
            <div className="team-card__avatar-wrapper">
              <img src={m.avatar} className="team-card__avatar" alt={m.name} />
              <div
                className={`team-card__status team-card__status--${m.status}`}
                title={statusLabels[m.status]}
              >
              </div>
            </div>

            <div className="team-card__name">{m.name}</div>
            <div className="team-card__role">{m.role}</div>
            <button className="team-card__btn">Написать</button>
          
          </article>
        ))}
      </div>
    </section>
  );
}